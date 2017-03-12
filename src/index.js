import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import createSagaMiddleware from "redux-saga";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import { userAuthenticated } from "./actions/auth";

import "normalize.css";
import "semantic-ui-css/semantic.min.css";

import Sagas from "./sagas";
import reducer from "./reducers";

export const history = createHistory();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(Sagas);

const token = localStorage.getItem("jwtToken");

// set all headers
setAuthorizationToken(token);

if (token !== null) {
  store.dispatch(userAuthenticated());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
