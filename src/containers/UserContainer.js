import React from "react";
import { connect } from "react-redux";
import UserComponent from "../components/UserComponent";
import { getCorelatedUser } from "../actions/userActions";

const Users = ({ users, auth, getCorelatedUser }) => (
  <UserComponent
    auth={auth}
    users={users}
    getCorelatedUser={getCorelatedUser}
  />
);

const mapStateToProps = state => ({ users: state.users, auth: state.auth });

const UserContainer = connect(mapStateToProps, {
  getCorelatedUser: getCorelatedUser
})(Users);

export default UserContainer;
