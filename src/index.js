import React from "react";
import { render } from "react-dom";
import firebase from "firebase";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import { Provider } from "react-redux";
import { Container } from "reactstrap";
import { firebaseConfig } from "./config";
import reducers from "./app/reducers";
import App from "./app/App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

firebase.initializeApp(firebaseConfig);

const loggerMiddleware = createLogger();
const reduxMiddlewares = [thunk, loggerMiddleware];

const store = createStore(
  reducers,
  applyMiddleware.apply(undefined, reduxMiddlewares)
);

render(
  <Container>
    <Provider store={store}>
      <App />
    </Provider>
  </Container>,
  document.getElementById("root")
);
