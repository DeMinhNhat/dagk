import * as types from "./authActionTypes";
import { authConfig } from "./../config";
import firebase from "firebase";

const signInSuccess = (uid, displayName, photoURL, email) => ({
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

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const { user: { uid, displayName, photoURL, email } } = result;

        firebase
          .database()
          .ref(`users/${uid}`)
          .set({
            displayName,
            photoURL,
            email,
            lastTimeLoggedIn: firebase.database.ServerValue.TIMESTAMP
          });

        dispatch(signInSuccess(uid, displayName, photoURL, email));
      })
      .catch(error => {
        dispatch(signInError(error.message));
      });
  };
};
