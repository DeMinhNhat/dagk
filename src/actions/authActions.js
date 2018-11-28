import firebase from "firebase";
import * as types from "../constants/authActionTypes";

export const signInSuccess = user => ({
	type: types.SIGNIN_SUCCESS,
	auth: user
});

export const retrieveStar = star => ({
	type: types.RETRIEVE_STAR,
	star
});

export const getStars = uid => {
	return dispatch => {
		const userQuery = firebase.database().ref(`users/${uid}/stars`);
		userQuery.on("child_added", snapshot => {
			const { displayName, photoURL, email, lastTimeLoggedIn } = snapshot.val();
			const star = { displayName, photoURL, email, lastTimeLoggedIn };
			dispatch(retrieveStar(star));
		});
	};
};

export const onSignIn = user => {
	return dispatch => {
		const { uid, displayName, photoURL, email } = user;
		const thisUser = { uid, displayName, photoURL, email };
		const userQuery = firebase.database().ref(`users/${uid}`);
		userQuery
			.set({
				displayName,
				photoURL,
				email,
				lastTimeLoggedIn: firebase.database.ServerValue.TIMESTAMP
			})
			.then(dispatch(signInSuccess(thisUser)))
			.catch(error => {
				console.log(error);
			});
		dispatch(getStars(uid));
	};
};

export const signOutSuccess = () => ({
	type: types.SIGNOUT_SUCCESS,
	auth: {}
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

//onSignIn()
// const provider = new firebase.auth.GoogleAuthProvider();
// authConfig.googlePermissions.forEach(permission =>
//   provider.addScope(permission)
// );
// firebase.auth().then(result => {}).catch(error => {console.log(error);})
