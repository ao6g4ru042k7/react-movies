import * as actionTypes from "../actionTypes";

const initailState = {
    latestData :{
        
    },
    allData: {
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    },
};

const reducer = (state = initailState, action) => {

    switch (action.type) {
        // case actionTypes.MOVIE_LATEST_SET:
        //     return { ...state, movieList: { ...state.movieList, latest: action.movies } };
        case actionTypes.MOVIE_NOW_PLAYING_SET:
            return { ...state, allData: { ...state.allData, nowPlaying: action.movies } };
        case actionTypes.MOVIE_POPULAR_SET:
            return { ...state, allData: { ...state.allData, popular: action.movies } };
        case actionTypes.MOVIE_TOP_RATED_SET:
            return { ...state, allData: { ...state.allData, topRated: action.movies } };
        case actionTypes.MOVIE_UPCOMING_SET:
            return { ...state, allData: { ...state.allData, upcoming: action.movies } };
        default:
            return state;
    }
};

export default reducer;
