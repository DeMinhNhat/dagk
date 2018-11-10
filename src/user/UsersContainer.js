import React from "react";
import { connect } from "react-redux";
import UsersComponent from "./UsersComponent";
import { getCorelatedUser } from "./usersActions";

const Users = ({ users, auth, getCorelatedUser }) => (
  <UsersComponent
    auth={auth}
    users={users}
    getCorelatedUser={getCorelatedUser}
  />
);

const mapStateToProps = state => ({ users: state.users, auth: state.auth });

const UsersContainer = connect(mapStateToProps, {
  getCorelatedUser: getCorelatedUser
})(Users);

export default UsersContainer;
