import firebase from "firebase";
import "firebase/firestore";

export const firebaseConfig = {
	apiKey: "AIzaSyDhwV7kiLcizGQUAOYFAa6otjMfa7RSZYY",
	authDomain: "aogi1180.firebaseapp.com",
	databaseURL: "https://aogi1180.firebaseio.com",
	projectId: "aogi1180",
	storageBucket: "aogi1180.appspot.com"
};

export const authConfig = {
	googlePermissions: ["profile","email"]
};

// firebase.initializeApp(firebaseConfig);
// export const firestore = firebase.firestore();

export const uiConfig = {
	signInFlow: "popup",
	signInSuccessUrl: "/signIn",
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.EmailAuthProvider.PROVIDER_ID
	]
};
