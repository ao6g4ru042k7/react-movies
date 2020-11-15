import classes from "./movieBox.module.scss";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const movieBox = ({ data }) => {
    return (
        <>
            <div className={classes["movies-box"]}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    width="100%"
                    height="100%"
                    alt={data.title}
                />
                <div className={classes.favorite}>
                    <FavoriteBorder className={classes.icon}/>
                </div>
            </div>
            <h3 className={classes.title}>{data.title}</h3>
        </>
    );
};
export default movieBox;
