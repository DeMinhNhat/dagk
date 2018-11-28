import { combineReducers } from "redux";
import * as messageReducers from "./messageReducers";
import * as authReducers from "./authReducers";
import * as userReducers from "./userReducers";

export default combineReducers({
	auth: authReducers.auth,
	stars: authReducers.stars,
	userMessage: messageReducers.userMessage,
	messages: messageReducers.messages,
	users: userReducers.users,
	corelatedUser: userReducers.user
});
