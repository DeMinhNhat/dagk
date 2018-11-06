import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

const HeaderComponent = ({ onSignInClick, auth, corelatedUser }) => (
  <div>
    {auth.isUserSignedIn ? (
      <div style={{ textAlign: "center", left: "50%" }}>
        <span>YOU:</span>
        <img
          src={`${auth.photoURL}`}
          alt="avatar"
          style={{ width: "80px", height: "auto" }}
        />
        <div className="chat-about">
          <div className="chat-num-messages" />
        </div>
        <i className="fa fa-star" />
        {corelatedUser !== "null" ? (
          <span>TO: {corelatedUser}</span>
        ) : (
          <span>TO: no one</span>
        )}
      </div>
    ) : (
      <div style={{ textAlign: "center", left: "50%" }}>
        <Button onClick={onSignInClick} color="primary">
          Signin Here!!
        </Button>
      </div>
    )}
  </div>
);

HeaderComponent.propTypes = {
  onSignInClick: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  corelatedUser: PropTypes.object.isRequired
};

export default HeaderComponent;
