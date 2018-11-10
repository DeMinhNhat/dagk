import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import HeaderContainer from "./../auth/HeaderContainer";
import MessageContainer from "./../message/MessageContainer";
import UsersContainer from "../user/UsersContainer";

// #div { overflow:hidden;height:whatever px; }
// #div:hover { overflow-y:scroll; }

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col
            xs="3"
            style={{ paddingRight: "20px", borderRight: "1px solid #ccc" }}
          >
            <UsersContainer />
          </Col>
          <Col xs="9">
            <HeaderContainer />
            <MessageContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
