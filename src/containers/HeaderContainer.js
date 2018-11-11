import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Badge } from "reactstrap";
import { BrowserRouter as Link } from "react-router-dom";
import * as authActions from "../actions/authActions";

const HeaderComponent = ({ auth, corelatedUser, onSignOut }) => (
  <Container>
    {auth.isUserSignedIn && (
      <Row>
        <Col />
        {corelatedUser !== "" && (
          <Col>
            <Row>
              <img
                src={`${corelatedUser.photoURL}`}
                alt="avatar"
                style={{ width: "80px", height: "80px" }}
              />
            </Row>
            <Row>
              <h4>
                <Badge color="info">{corelatedUser.displayName}</Badge>
              </h4>
            </Row>
          </Col>
        )}
        <Col>
          <Row>
            <img
              src={`${auth.photoURL}`}
              alt="avatar"
              style={{ width: "80px", height: "80px" }}
            />
          </Row>
          <Row>
            <h4>
              <Badge color="info">
                <Link to="/" onClick={onSignOut} style={{ color: "white" }}>
                  Sign Out
                </Link>
              </Badge>
            </h4>
          </Row>
        </Col>
        <Col />
      </Row>
    )}
  </Container>
);

const mapStateToProps = state => ({
  corelatedUser: state.corelatedUser,
  auth: state.auth
});

const HeaderContainer = connect(mapStateToProps, {
  onSignOut: authActions.onSignOut
})(HeaderComponent);

export default HeaderContainer;
