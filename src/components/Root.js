import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import LoginComponent from "./LoginComponent";
import App from "./App";

const Root = ({ store }) => (
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={LoginComponent} />
				<Route path="/signIn" component={App} />
			</Switch>
		</BrowserRouter>
	</Provider>
);

export default Root;
