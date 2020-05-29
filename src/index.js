import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
// import store from "./redux/store";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./redux/reducers/rootReducer";
import Root from "./components/Root";
import "./assets/styles/css/index.css";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

render(<Root store={store} />, document.getElementById("root"));
