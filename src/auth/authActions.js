import firebase from "firebase";
import { getConnectedUsers } from "../user/usersActions";
import { getSentMessages } from "../message/messageActions";
import * as types from "./authActionTypes";
import { authConfig } from "./../config";

const signInSuccess = ({ uid, displayName, photoURL, email }) => ({
  type: types.SIGNIN_SUCCESS,
  uid,
  displayName,
  photoURL,
  email
});

const signInInProgress = () => ({ type: types.SIGNIN });

const signInError = errorMessage => ({
  type: types.SIGNIN_ERROR,
  errorMessage
});

export const signIn = () => {
  return dispatch => {
    dispatch(signInInProgress());

    const provider = new firebase.auth.GoogleAuthProvider();
    authConfig.googlePermissions.forEach(permission =>
      provider.addScope(permission)
    );

    const auth = firebase.auth().signInWithPopup(provider);
    auth
      .then(result => {
        const { user: { uid, displayName, photoURL, email } } = result;
        const userQuery = firebase.database().ref(`users/${uid}`);
        userQuery.set({
          displayName,
          photoURL,
          email,
          lastTimeLoggedIn: firebase.database.ServerValue.TIMESTAMP
        });

        dispatch(signInSuccess({ uid, displayName, photoURL, email }));
        dispatch(getConnectedUsers());
        dispatch(getSentMessages());
      })
      .catch(error => {
        dispatch(signInError(error.message));
      });
  };
};
