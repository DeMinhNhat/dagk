import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Container } from "reactstrap";
import firebase from "firebase";
import React from "react";
import { uiConfig } from "./../config";

const LoginComponent = () => (
	<Container>
		<div>
			<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
		</div>
	</Container>
);
export default LoginComponent;
