import { render } from "react-dom";
import firebase from "firebase";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./configureStore";
import { firebaseConfig } from "./config";
import Root from "./app/Root";
firebase.initializeApp(firebaseConfig);

const store = configureStore();

render(<Root store={store} />, document.getElementById("root"));
