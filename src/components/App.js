import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import firebase from "firebase";
import MessageContainer from "./../containers/MessageContainer";
import UserContainer from "./../containers/UserContainer";
import HeaderContainer from "./../containers/HeaderContainer";
import * as creatorActions from "../actions/creatorAction";

class AppComp extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {this.props.getStart(user);}
    });
  }

  componentDidUpdate() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {this.props.getStart(user);}
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col
            xs="3"
            style={{ paddingRight: "20px", borderRight: "1px solid #ccc" }}
          >
            <UserContainer />
          </Col>
          <Col xs="9">
            <HeaderContainer />
            <hr />
            <MessageContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const App = connect(mapStateToProps, {getStart: creatorActions.getStart})(AppComp);

export default App;
