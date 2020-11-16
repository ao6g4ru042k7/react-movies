import { combineReducers } from "redux";
import errorHandlerReducer from "./errorHandler";
import movieReducer from "./movie";
import authReducer from "./auth";

const rootReducer = combineReducers({
    errorHandler: errorHandlerReducer,
    movie: movieReducer,
    auth: authReducer,
});
export default rootReducer;
