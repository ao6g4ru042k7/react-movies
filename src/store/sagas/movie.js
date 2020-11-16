import $api from "../../api/tmdb";
import * as actionTypes from "../actionTypes";
import * as actions from "../actions";

import { put, takeEvery } from "redux-saga/effects";

function* getLatestMovie() {
    try {
        const res = yield $api.latest();
        yield put(actions.getLatestMovie(res.data));
        console.log('getLatestMovie',res.data);
    } catch (err) {
        console.log(err);
    }
}
function* getNowPlayingMovies() {
    try {
        const res = yield $api.nowPlaying();
        yield put(actions.setNowPlayingMovies(res.data.results));
        console.log('getNowPlayingMovies',res.data.results);
    } catch (err) {
        console.log(err);
    }
}
function* getPopularMovies() {
    try {
        const res = yield $api.popular();
        yield put(actions.setPopularMovies(res.data.results));
        console.log('getPopularMovies',res.data.results);
    } catch (err) {
        console.log(err);
    }
}
function* getTopRatedMovies() {
    try {
        const res = yield $api.topRated();
        yield put(actions.setTopRatedMovies(res.data.results));
        console.log('getTopRatedMovies',res.data.results);
    } catch (err) {
        console.log(err);
    }
}
function* getUpcomingMovies() {
    try {
        const res = yield $api.upcoming();
        yield put(actions.setUpcomingMovies(res.data.results));
        console.log('getUpcomingMovies',res.data.results);
    } catch (err) {
        console.log(err);
    }
}

export function* watchMovies() {
    yield takeEvery(actionTypes.MOVIE_LATEST_GET, getLatestMovie);

    yield takeEvery(actionTypes.MOVIE_NOW_PLAYING_GET, getNowPlayingMovies);
    yield takeEvery(actionTypes.MOVIE_POPULAR_GET, getPopularMovies);
    yield takeEvery(actionTypes.MOVIE_TOP_RATED_GET, getTopRatedMovies);
    yield takeEvery(actionTypes.MOVIE_UPCOMING_GET, getUpcomingMovies);
}
