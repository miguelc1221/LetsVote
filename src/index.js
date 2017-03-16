import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import { userAuthenticated } from "./actions/auth";
import "normalize.css";
import "semantic-ui-css/semantic.min.css";
import store from "./store";

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
