import * as actionTypes from "../actiontypes";

const initialState = {
    open: false,
    message: "",
};
const setMes = (message) => {
    return { open: true, message };
};
const removeMes = () => {
    return { open: false, message: "" };
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ERROR_MES_SET:
            return setMes(action.message);
        case actionTypes.ERROR_MES_REMOVE:
            return removeMes();
        default:
            return state;
    }
};

export default reducer;
