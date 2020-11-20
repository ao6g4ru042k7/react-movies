import * as actionTypes from "../actionTypes";
// import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    listId: null,
    authRedirectPath: "/",
};

const authStart = (state, action) => {
    return { ...state, error: null, loading: true };
};

const authSuccess = (state, action) => {
    return { ...state, token: action.idToken, userId: action.userId, error: null, loading: false };
};

const authFail = (state, action) => {
    return { ...state, error: action.error, loading: false };
};

const authLogout = (state, action) => {
    return { ...state, token: null, userId: null, error: null, listId: null };
};
const setListId = (state, id) => {
    return { ...state, listId: id };
};
const setAuthRedirectPath = (state, action) => {
    return { ...state, authRedirectPath: action.path };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return setAuthRedirectPath(state, action);
        case actionTypes.SET_AUTH_LIST_ID:
            return setListId(state, action.listId);
        default:
            return state;
    }
};

export default reducer;
