import firebase from "firebase";
import * as types from "../constants/userActionTypes";

export const getUser = user => {
  return {
    type: types.GET_USERS,
    user
  };
};

export const getCorelatedUser = user => {
  return {
    type: types.GET_CORELATED_USER,
    user
  };
};

export const getConnectedUsers = () => {
  return dispatch => {
    const userQuery = firebase.database().ref("users");
    userQuery.on("child_added", snapshot => {
      const uid = snapshot.key;
      const { displayName, email, lastTimeLoggedIn, photoURL } = snapshot.val();
      let user = { uid, displayName, email, lastTimeLoggedIn, photoURL };
      dispatch(getUser(user));
    });
  };
};
