import * as actionTypes from "../actiontypes";

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
