import { Container, Row, Col, Badge } from "reactstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "firebase";
import MessageContainer from "./../containers/MessageContainer";
import HeaderContainer from "./../containers/HeaderContainer";
import UserContainer from "./../containers/UserContainer";
import * as authActions from "../actions/authActions";

class AppComponent extends Component {
  componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) this.props.onSignIn(user);
		});
	}

	render() {
		return this.props.auth.isUserSignedIn ? (
			<Container>
				<Row>
					<Col
						xs="4"
						style={{ paddingRight: "20px", borderRight: "1px solid #ccc" }}
					>
						<UserContainer />
					</Col>
					<Col xs="8">
						<HeaderContainer />
						<hr />
						<MessageContainer />
					</Col>
				</Row>
			</Container>
		) : (
			<Container style={{ textAlign: "center", left: "50%" }}>
				<h4>
					<Badge color="info">You need to sign in to see messages!!</Badge>
					<hr />
					<Badge color="info">
						<Link to="/" style={{ color: "white" }}>
              Sign In!!
						</Link>
					</Badge>
				</h4>
			</Container>
		);
	}
}

const mapStateToProps = state => ({ auth: state.auth });
const App = connect(mapStateToProps, {
	onSignIn: authActions.onSignIn
})(AppComponent);

export default App;
