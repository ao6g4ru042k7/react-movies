import { combineReducers } from "redux";
import errorHandlerReducer from "./errorHandler";
import movieReducer from "./movie";

const rootReducer = combineReducers({
    errorHandler: errorHandlerReducer,
    movie: movieReducer,
});
export default rootReducer;
