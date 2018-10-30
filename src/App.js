import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

firebase.initializeApp({
  apiKey: " AIzaSyDhwV7kiLcizGQUAOYFAa6otjMfa7RSZYY",
  authDomain: "aogi1180.firebaseapp.com"
});

class App extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: { signInSuccess: () => false }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <Container>
        {this.state.isSignedIn ? (
          <div className="App">
            <Card className="Card">
              <CardImg
                alt="profile picture"
                src={firebase.auth().currentUser.photoURL}
              />
              <CardBody>
                <CardTitle>
                  Welcome {firebase.auth().currentUser.displayName}
                </CardTitle>
                <CardText>How are you today? :)</CardText>
                <Button color="info" onClick={() => firebase.auth().signOut()}>
                  Sign out
                </Button>
              </CardBody>
            </Card>
          </div>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </Container>
    );
  }
}

export default App;
