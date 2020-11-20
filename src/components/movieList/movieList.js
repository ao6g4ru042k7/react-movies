import React from "react";
import MoviesSwipper from "./moviesSwipper/moviesSwipper";
import classes from "./movieList.module.scss";

const movieList = ({ moviesData, title, id }) => {
    return (
        <>
            {moviesData.length > 0 ? (
                <div className={classes["movie-list"]}>
                    <h3 className={classes.title}>{title}</h3>
                    <MoviesSwipper moviesData={moviesData} id={id} />
                </div>
            ) : null}
        </>
    );
};

export default React.memo(movieList);
