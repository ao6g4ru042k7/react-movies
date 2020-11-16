import * as actionTypes from "../actionTypes";

export const setErrorMes = (message) => {
    return {
        type: actionTypes.ERROR_MES_SET,
        message,
    };
};

export const removeErrorMes = () => {
    return {
        type: actionTypes.ERROR_MES_REMOVE,
    };
};
