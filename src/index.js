import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers";
import middleware from "./middleware";
import "semantic-ui-css/semantic.min.css";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
