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

export const setFavMovies = (movies) => {
    return {
        type: actionTypes.MOVIE_FAV_LIST_SET,
        movies,
    };
};

export const getLatestMovie = () => {
    return {
        type: actionTypes.MOVIE_LATEST_GET,
    };
};
export const getNowPlayingMovies = () => {
    return {
        type: actionTypes.MOVIE_NOW_PLAYING_GET,
    };
};
export const getPopularMovies = () => {
    return {
        type: actionTypes.MOVIE_POPULAR_GET,
    };
};
export const getTopRatedMovies = () => {
    return {
        type: actionTypes.MOVIE_TOP_RATED_GET,
    };
};
export const getUpcomingMovies = () => {
    return {
        type: actionTypes.MOVIE_UPCOMING_GET,
    };
};
export const getFavMovies = () => {
    return {
        type: actionTypes.MOVIE_FAV_LIST_GET,
    };
};
export const addFavMovie = (id,data) => {
    return {
        type: actionTypes.MOVIE_FAV_ITEM_ADD,
        id,data
    };
};
export const removeFavMovie = (id) => {
    return {
        type: actionTypes.MOVIE_FAV_ITEM_REMOVE,
        id
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
