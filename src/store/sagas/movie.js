import $api from "../../api/tmdb";
import * as actionTypes from "../actionTypes";
import * as actions from "../actions";
import firebaseAxios from "../../api/firebase/index";

import { put, takeEvery, select } from "redux-saga/effects";

function* getLatestMovie() {
    try {
        const res = yield $api.latest();
        yield put(actions.getLatestMovie(res.data));
        // console.log('getLatestMovie',res.data);
    } catch (err) {
        console.log(err);
    }
}
function* getNowPlayingMovies() {
    try {
        const res = yield $api.nowPlaying();
        yield put(actions.setNowPlayingMovies(res.data.results));
        // console.log('getNowPlayingMovies',res.data.results);
    } catch (err) {
        console.log(err);
    }
}
function* getPopularMovies() {
    try {
        const res = yield $api.popular();
        yield put(actions.setPopularMovies(res.data.results));
        // console.log('getPopularMovies',res.data.results);
    } catch (err) {
        console.log(err);
    }
}
function* getTopRatedMovies() {
    try {
        const res = yield $api.topRated();
        yield put(actions.setTopRatedMovies(res.data.results));
        // console.log('getTopRatedMovies',res.data.results);
    } catch (err) {
        console.log(err);
    }
}
function* getUpcomingMovies() {
    try {
        const res = yield $api.upcoming();
        yield put(actions.setUpcomingMovies(res.data.results));
        // console.log('getUpcomingMovies',res.data.results);
    } catch (err) {
        console.log(err);
    }
}

function* createMovieList() {
    //如果註冊成功，發送API創建ListId
    //將ListId儲存於redux
    //在DB中新增使用者資料(userId、ListId)
    try {
        const res = yield $api.createList();
        yield put(actions.setListId(res.data.list_id));
        console.log("createMovieList", res.data.list_id);
        const token = yield select((state) => state.auth.token);
        const userId = yield select((state) => state.auth.userId);
        yield firebaseAxios.createUserData(token, { userId: userId, listId: res.data.list_id });
    } catch (err) {
        console.log(err);
    }
}

function* getMovieList() {
    //從DB中取得使用者ListId
    const token = yield select((state) => state.auth.token);
    const userId = yield select((state) => state.auth.userId);
    const res = yield firebaseAxios.getUserData(token, userId);
    console.log("........................................")
    console.log(res.data[Object.keys(res.data)[0]].listId)
    
    //將ListId儲存於redux
    //取得ListId詳細資料
}

export function* watchMovies() {
    yield takeEvery(actionTypes.MOVIE_LATEST_GET, getLatestMovie);

    yield takeEvery(actionTypes.MOVIE_NOW_PLAYING_GET, getNowPlayingMovies);
    yield takeEvery(actionTypes.MOVIE_POPULAR_GET, getPopularMovies);
    yield takeEvery(actionTypes.MOVIE_TOP_RATED_GET, getTopRatedMovies);
    yield takeEvery(actionTypes.MOVIE_UPCOMING_GET, getUpcomingMovies);

    yield takeEvery(actionTypes.MOVIE_LIST_CREATE, createMovieList);
    yield takeEvery(actionTypes.MOVIE_LIST_GET, getMovieList);
}
