import React, { Component } from "react";
import { addConnectedUser } from "./usersActions";
import { connect } from "react-redux";
import UsersComponent from "./UsersComponent";

const Users = ({ users, addConnectedUser }) => (
  <UsersComponent addConnectedUser={addConnectedUser} users={users} />
);

const mapStateToProps = state => ({ users: state.users });

const UsersContainer = connect(mapStateToProps, {
  addConnectedUser: addConnectedUser
})(Users);

export default UsersContainer;
