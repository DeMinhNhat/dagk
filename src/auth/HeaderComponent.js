import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Container } from "reactstrap";

const HeaderComponent = ({ onSignInClick, auth }) => (
  <div>
    {auth.isUserSignedIn ? (
      <Container>
        <img
          src={`${auth.photoURL}`}
          alt="avatar"
          style={{ width: "80px", height: "auto" }}
        />
        <div class="chat-about">
          <div class="chat-with">{auth.displayName}</div>
          <div class="chat-num-messages" />
        </div>
        <i class="fa fa-star" />
      </Container>
    ) : (
      <Button onClick={onSignInClick} color="primary">
        Signin Here!!
      </Button>
    )}
  </div>
);

HeaderComponent.propTypes = {
  onSignInClick: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

export default HeaderComponent;
