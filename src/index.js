import { render } from "react-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./configureStore";
import Root from "./components/Root";
import { firebaseConfig } from "./config";
import firebase from "firebase";
firebase.initializeApp(firebaseConfig);

const store = configureStore();

render(<Root store={store} />, document.getElementById("root"));
