import { useState } from "react";
import classes from "./movieBox.module.scss";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import $api from "../../api/tmdb";
import * as actions from "../../store/actions";
import defImg from "../../assets/default.png";

const MovieBox = ({ data }) => {
    const history = useHistory();
    const isAuthenticated = useSelector((state) => state.auth.token !== null);
    const listId = useSelector((state) => state.auth.listId);
    const favSet = useSelector((state) => state.movie.favSet);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const fav = favSet.has(data.id);
    const favoriteHandler = (e) => {
        e.stopPropagation();
        if (isAuthenticated && !isLoading) {
            setIsLoading(true);
            if (fav) {
                dispatch(actions.removeFavMovie(data.id));
                $api.removeItemFromList(listId, data.id)
                    .then(() => {
                        setIsLoading(false);
                    })
                    .catch(() => {
                        dispatch(actions.addFavMovie(data.id, data));
                        setIsLoading(false);
                    });
            } else {
                dispatch(actions.addFavMovie(data.id, data));
                $api.addItemToList(listId, data.id)
                    .then(() => {
                        setIsLoading(false);
                    })
                    .catch(() => {
                        dispatch(actions.removeFavMovie(data.id));
                        setIsLoading(false);
                    });
            }
        }
    };
    return (
        <div style={{ width: "min-content" }}>
            <div
                className={classes["movies-box"]}
                onClick={() => {
                    history.push("/detail/" + data.id);
                }}
            >
                <img
                    src={
                        data.poster_path
                            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                            : defImg
                    }
                    width="100%"
                    height="100%"
                    alt={data.title}
                />
                <div className={classes.content}>
                    <h3>簡介</h3>
                    <h4>{data.vote_average} / 10</h4>
                    <p>{data.overview}</p>
                    <div>
                        <h5>發行日期</h5>
                        <span>{data.release_date}</span>
                    </div>
                </div>
                <div
                    className={classes.favorite}
                    style={fav ? { backgroundColor: "#ef352c" } : null}
                    onClick={favoriteHandler}
                >
                    <FavoriteBorder className={classes.icon} />
                </div>
            </div>
            <h3 className={classes.title}>{data.title}</h3>
        </div>
    );
};
export default MovieBox;
