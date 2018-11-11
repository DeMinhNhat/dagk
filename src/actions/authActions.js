import * as types from "../constants/authActionTypes";
import firebase from "firebase";

export const signInSuccess = ({ uid, displayName, photoURL, email }) => ({
  type: types.SIGNIN_SUCCESS,
  uid,
  displayName,
  photoURL,
  email
});

export const signOutSuccess = () => ({
  type: types.SIGNOUT_SUCCESS,
  uid: null,
  displayName: null,
  photoURL: null,
  email: null
});

export const onSignOut = () => {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(signOutSuccess());
      })
      .catch(error => {
        console.log(error);
      });
  };
};

// const signInInProgress = () => ({ type: types.SIGNIN });

// const signInError = errorMessage => ({
//   type: types.SIGNIN_ERROR,
//   errorMessage
// });

// export const signIn = () => {
//   return dispatch => {
//     dispatch(signInInProgress());

//     // const provider = new firebase.auth.GoogleAuthProvider();
//     // authConfig.googlePermissions.forEach(permission =>
//     //   provider.addScope(permission)
//     // );
//     firebase.auth().then(result => {
//         const { user: { uid, displayName, photoURL, email } } = result;
//         const userQuery = firebase.database().ref(`users/${uid}`);
//         userQuery.set({
//           displayName,
//           photoURL,
//           email,
//           lastTimeLoggedIn: firebase.database.ServerValue.TIMESTAMP
//         });

//         dispatch(signInSuccess({ uid, displayName, photoURL, email }));
//         dispatch(getConnectedUsers());
//         dispatch(getSentMessages());
//       })
//       .catch(error => {
//         dispatch(signInError(error.message));
//       });
//   };
// };

// export const signOut = () => {
//   return dispatch => {
//     firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         dispatch(signOutSuccess());
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// };
