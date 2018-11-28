import { connect } from "react-redux";
import React from "react";
import UserComponent from "../components/UserComponent";
import * as userActions from "../actions/userActions";
import * as authActions from "../actions/authActions";

const Users = ({
	auth,
	stars,
	users,
	starUser,
	getStars,
	getSearchUsers,
	getCorelatedUser,
	getConnectedUsers
}) => (
	<UserComponent
		auth={auth}
		stars={stars}
		users={users}
		starUser={starUser}
		getStars={getStars}
		getSearchUsers={getSearchUsers}
		getCorelatedUser={getCorelatedUser}
		getConnectedUsers={getConnectedUsers}
	/>
);

const mapStateToProps = state => ({
	users: state.users,
	stars: state.stars,
	auth: state.auth
});

const UserContainer = connect(mapStateToProps, {
	starUser: userActions.starUser,
	getStars: authActions.getStars,
	getSearchUsers: userActions.getSearchUsers,
	getCorelatedUser: userActions.getCorelatedUser,
	getConnectedUsers: userActions.getConnectedUsers
})(Users);

export default UserContainer;
