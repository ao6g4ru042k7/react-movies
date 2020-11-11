import { createStore,applyMiddleware  } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import {testSagas} from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(testSagas)

export default store;
