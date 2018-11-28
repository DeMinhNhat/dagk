import firebase from "firebase";
import * as types from "../constants/userActionTypes";

export const clearUsers = () => ({ type: types.CLEAR_USERS });

export const getUser = user => {
	return {
		type: types.GET_USER,
		user,
	};
};

export const getCorelatedUser = user => {
	return {
		type: types.GET_CORELATED_USER,
		user
	};
};

export const starUser = (user, uid) => {
	return dispatch => {
		const { displayName, photoURL, email, lastTimeLoggedIn } = user;
		const thisUser = { displayName, photoURL, email, lastTimeLoggedIn };
		const userQuery = firebase.database().ref(`users/${uid}/stars/${user.uid}`);
		userQuery.set(thisUser).catch(error => {
			console.log(error);
		});
	};
};

export const getSearchUsers = search => {
	return dispatch => {
		dispatch(clearUsers());
		const userQuery = firebase.database().ref("users");
		userQuery.on("child_added", snapshot => {
			const uid = snapshot.key;
			const { displayName, email, lastTimeLoggedIn, photoURL } = snapshot.val();
			let user = { uid, displayName, email, lastTimeLoggedIn, photoURL };
			if (search === "") dispatch(getUser(user));
			else if (
				user.displayName.toLowerCase().search(search.toLowerCase()) !== -1
			)
				dispatch(getUser(user));
		});
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
