import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Sagas from "./sagas";
import reducer from "./reducers";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(Sagas);

export default store;
