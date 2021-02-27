import { createStore, applyMiddleware, compose } from "redux";
import todoReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import mySagas from './saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware));

const stores = createStore(todoReducer, enhancer);
sagaMiddleware.run(mySagas)

export default stores;
