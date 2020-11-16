import * as actionTypes from "../actionTypes";

const initialState = {
    open: false,
    message: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ERROR_MES_SET:
            return { open: true, message: action.message };
        case actionTypes.ERROR_MES_REMOVE:
            return { open: false, message: "" };
        default:
            return state;
    }
};

export default reducer;
