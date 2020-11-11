import { combineReducers } from "redux";
import errorHandlerReducer from "./errorHandler";

const rootReducer = combineReducers({
    errorHandler: errorHandlerReducer,
});

export default rootReducer;
