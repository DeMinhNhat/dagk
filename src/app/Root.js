import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import App from "./App";

const Root = ({ store }) => (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
