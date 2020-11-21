import { put, delay, takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import * as actions from "../actions/index";
import axios from "axios";
import { apiKey } from "../../api/firebase/base";

function* logoutSaga() {
    yield localStorage.removeItem("token");
    yield localStorage.removeItem("expirationDate");
    yield localStorage.removeItem("userId");
    yield localStorage.removeItem("listId");
    yield put(actions.logoutSucceed());
}

function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime);
    yield put(actions.logout());
}

function* authUserSaga(action) {
    yield put(actions.authStart());
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true,
    };
    let url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${apiKey}`;
    if (!action.isSignup) {
        url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`;
    }
    try {
        const response = yield axios.post(url, authData);
        const expirationDate = yield new Date(
            new Date().getTime() + response.data.expiresIn * 1000
        );
        yield localStorage.setItem("token", response.data.idToken);
        yield localStorage.setItem("expirationDate", expirationDate);
        yield localStorage.setItem("userId", response.data.localId);
        yield put(
            actions.authSuccess(response.data.idToken, response.data.localId)
        );
        yield put(actions.checkAuthTimeout(response.data.expiresIn));
        if (action.isSignup) {
            yield put(actions.createMovieList());
        } else {
            yield put(actions.getMovieList());
        }
    } catch (err) {
        yield put(actions.authFail(err.response.data.error.message));
    }
}

function* authCheckState() {
    const token = yield localStorage.getItem("token");

    if (!token) {
        yield put(actions.logout());
    } else {
        const expirationDate = new Date(localStorage.getItem("expirationDate"));
        if (expirationDate <= new Date()) {
            yield put(actions.logout());
        } else {
            const userId = yield localStorage.getItem("userId");
            yield put(actions.authSuccess(token, userId));
            yield put(
                actions.checkAuthTimeout(
                    (expirationDate.getTime() - new Date().getTime()) / 1000
                )
            );
            const listId = yield localStorage.getItem("listId");
            yield put(actions.setListId(listId));
            yield put(actions.getFavMovies());
        }
    }
}

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckState);
}
