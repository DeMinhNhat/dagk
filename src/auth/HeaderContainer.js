import React, { Component } from "react";
import { connect } from "react-redux";
import * as authActions from "../auth/authActions";
import HeaderComponent from "./HeaderComponent";

const mapStateToProps = state =>({auth: state.auth})

const HeaderContainer = connect(mapStateToProps, {onSignInClick:authActions.signIn})(HeaderComponent);

export default HeaderContainer;
