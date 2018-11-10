import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Row, Col, Badge } from "reactstrap";

const HeaderComponent = ({ onSignInClick, auth, corelatedUser }) => (
  <Container>
    {auth.isUserSignedIn ? (
      <Row>
        <Col />
        <Col>
          <Row>
            <Badge color="info">YOU</Badge>
          </Row>
          <Row>
            <img
              src={`${auth.photoURL}`}
              alt="avatar"
              style={{ width: "80px", height: "80px" }}
            />
          </Row>
        </Col>
        {corelatedUser !== "" ? (
          <Col>
            <Row>
              <Badge color="info">TO</Badge>
            </Row>
            <Row>
              <img
                src={`${corelatedUser.photoURL}`}
                alt="avatar"
                style={{ width: "80px", height: "80px" }}
              />
            </Row>
          </Col>
        ) : (
          <Col />
        )}
        <Col />
      </Row>
    ) : (
      <Container style={{ textAlign: "center", left: "50%" }}>
        <Button onClick={onSignInClick} color="primary">
          Signin Here!!
        </Button>
      </Container>
    )}
    <hr />
  </Container>
);

HeaderComponent.propTypes = {
  onSignInClick: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  corelatedUser: PropTypes.object.isRequired
};

export default HeaderComponent;
