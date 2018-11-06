import React from "react";
import firebase from "firebase";
import thunk from "redux-thunk";
import { render } from "react-dom";
import createLogger from "redux-logger";
import { firebaseConfig } from "./config";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import Root from "./app/Root";
import reducers from "./app/reducers";
import "bootstrap/dist/css/bootstrap.min.css";
firebase.initializeApp(firebaseConfig);

const loggerMiddleware = createLogger();
const reduxMiddlewares = [thunk, loggerMiddleware];

const store = createStore(
  reducers,
  applyMiddleware.apply(undefined, reduxMiddlewares)
);

render(<Root store={store} />, document.getElementById("root"));
