import React from 'react'
import MoviesSwipper from "./moviesSwipper/moviesSwipper";
import classes from "./movieList.module.scss";

const movieList = ({ moviesData, title }) => {
    console.log("movieList", moviesData);
    return (
        <div className={classes["movie-list"]}>
            <h3 className={classes.title}>{title}</h3>
            <MoviesSwipper moviesData={moviesData} />
        </div>
    );
};

export default React.memo(movieList);
