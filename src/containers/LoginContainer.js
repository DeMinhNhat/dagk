import firebase from "firebase";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import React, { Component } from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig } from "./../config";

class LoginComponent extends Component {
  render() {
    return (
      <Container>
        <div>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});
const LoginContainer = connect(mapStateToProps, {})(LoginComponent);

export default LoginContainer;
