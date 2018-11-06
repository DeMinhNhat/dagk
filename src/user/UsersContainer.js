import React from "react";
import { addConnectedUser, getCorelatedUser } from "./usersActions";
import { connect } from "react-redux";
import UsersComponent from "./UsersComponent";
import { Badge, Container } from "reactstrap";

const Users = ({ users, addConnectedUser, getCorelatedUser, auth }) => (
  <Container>
    <h2>
      <Badge color="secondary">Người dùng</Badge>
    </h2>
    <UsersComponent
      getCorelatedUser={getCorelatedUser}
      auth={auth}
      addConnectedUser={addConnectedUser}
      users={users}
    />
  </Container>
);

const mapStateToProps = state => ({ users: state.users, auth: state.auth });

const UsersContainer = connect(mapStateToProps, {
  addConnectedUser: addConnectedUser,
  getCorelatedUser: getCorelatedUser
})(Users);

export default UsersContainer;
