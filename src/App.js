import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import config from "./config";
import Home from "./components/Home";
import { Container } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
    this.state = { isSignedIn: false };
  }

  addUser = currentUser => {
    firebase
      .database()
      .ref("Users/")
      .push({
        name: currentUser.displayName,
        email: currentUser.email,
        photo: currentUser.photoURL
      });
  };

  getUsers = () => {
    const usersDB = firebase
      .database()
      .ref("Users/")
      .limitToLast(500);
    usersDB.on("value", snapshot => {
      let users = [];
      snapshot.forEach(child => {
        users.push({
          name: child.val().name,
          email: child.val().email,
          photoURL: child.val().photoURL
        });
      });

      console.log(users);
    });
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => {
        console.log(firebase.auth().currentUser);
        this.addUser(firebase.auth().currentUser);
      }
    }
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
          <Home />
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
