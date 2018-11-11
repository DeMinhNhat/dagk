import { combineReducers } from "redux";
import * as authReducers from "./authReducers";
import * as messageReducers from "./messageReducers";
import * as userReducers from "./userReducers";

export default combineReducers({
  auth: authReducers.auth,
  userMessage: messageReducers.userMessage,
  messages: messageReducers.messages,
  users: userReducers.users,
  corelatedUser: userReducers.user
});
