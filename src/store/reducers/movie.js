import * as actionTypes from "../actionTypes";

const initailState = {
    favList: [],
    favSet: new Set(),
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
            return {
                ...state,
                allData: { ...state.allData, nowPlaying: action.movies },
            };
        case actionTypes.MOVIE_POPULAR_SET:
            return {
                ...state,
                allData: { ...state.allData, popular: action.movies },
            };
        case actionTypes.MOVIE_TOP_RATED_SET:
            return {
                ...state,
                allData: { ...state.allData, topRated: action.movies },
            };
        case actionTypes.MOVIE_UPCOMING_SET:
            return {
                ...state,
                allData: { ...state.allData, upcoming: action.movies },
            };
        case actionTypes.MOVIE_FAV_LIST_SET:
            return {
                ...state,
                favList: action.movies,
                favSet: new Set(action.movies.map((movie) => movie.id)),
            };
        case actionTypes.MOVIE_FAV_ITEM_ADD:
            return {
                ...state,
                favSet: new Set([...state.favSet, action.id]),
                favList: [...state.favList, action.data],
            };
        case actionTypes.MOVIE_FAV_ITEM_REMOVE:
            const newSet = new Set([...state.favSet]);
            newSet.delete(action.id);
            return {
                ...state,
                favSet: newSet,
                favList: state.favList.filter((fav) => action.id !== fav.id),
            };

        default:
            return state;
    }
};

export default reducer;
