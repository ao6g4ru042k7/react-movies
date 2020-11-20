import classes from "./movieBox.module.scss";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieBox = ({ data, fav = false }) => {
    const history = useHistory();
    const isAuthenticated = useSelector((state) => state.auth.token !== null);
    const favoriteHandler = (e) => {
        e.stopPropagation();
        
    };
    return (
        <div style={{ width: "min-content" }}>
            <div
                className={classes["movies-box"]}
                onClick={() => {
                    history.push("/detail/" + data.id);
                }}
            >
                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} width="100%" height="100%" alt={data.title} />
                <div className={classes.content}>
                    <h3>簡介</h3>
                    <h4>{data.vote_average} / 10</h4>
                    <p>{data.overview}</p>
                    <div>
                        <h5>發行日期</h5>
                        <span>{data.release_date}</span>
                    </div>
                </div>
                <div className={classes.favorite} onClick={favoriteHandler}>
                    {fav ? <FavoriteBorder className={classes.icon} /> : <Favorite className={classes.icon} />}
                </div>
            </div>
            <h3 className={classes.title}>{data.title}</h3>
        </div>
    );
};
export default MovieBox;
