import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

export function* testSagas() {
    yield takeEvery("USER_FETCH_REQUESTED", {});
}

