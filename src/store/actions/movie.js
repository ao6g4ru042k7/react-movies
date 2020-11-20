import * as actionTypes from "../actionTypes";

export const setLatestMovie = (movies) => {
    return {
        type: actionTypes.MOVIE_LATEST_SET,
        movies,
    };
};
export const setNowPlayingMovies = (movies) => {
    return {
        type: actionTypes.MOVIE_NOW_PLAYING_SET,
        movies,
    };
};
export const setPopularMovies = (movies) => {
    return {
        type: actionTypes.MOVIE_POPULAR_SET,
        movies,
    };
};
export const setTopRatedMovies = (movies) => {
    return {
        type: actionTypes.MOVIE_TOP_RATED_SET,
        movies,
    };
};
export const setUpcomingMovies = (movies) => {
    return {
        type: actionTypes.MOVIE_UPCOMING_SET,
        movies,
    };
};

export const getLatestMovie = (movies) => {
    return {
        type: actionTypes.MOVIE_LATEST_GET,
        movies,
    };
};
export const getNowPlayingMovies = (movies) => {
    return {
        type: actionTypes.MOVIE_NOW_PLAYING_GET,
        movies,
    };
};
export const getPopularMovies = (movies) => {
    return {
        type: actionTypes.MOVIE_POPULAR_GET,
        movies,
    };
};
export const getTopRatedMovies = (movies) => {
    return {
        type: actionTypes.MOVIE_TOP_RATED_GET,
        movies,
    };
};
export const getUpcomingMovies = (movies) => {
    return {
        type: actionTypes.MOVIE_UPCOMING_GET,
        movies,
    };
};
export const createMovieList = () => {
    return {
        type: actionTypes.MOVIE_LIST_CREATE,
    };
};

export const getMovieList = () => {
    return {
        type: actionTypes.MOVIE_LIST_GET,
    };
};
