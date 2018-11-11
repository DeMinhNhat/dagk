import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import App from "./App";
import LoginContainer from "../containers/LoginContainer";

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route path="/signIn" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Root;
