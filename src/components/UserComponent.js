import React, { Component } from "react";
import { Container } from "reactstrap";
import UserSearch from "./UserSearch";
import UserList from "./UserList";
import StarList from "./StarList";

class UserComponent extends Component {
	render() {
		return (
			this.props.auth.isUserSignedIn && (
				<Container>
					<UserSearch getSearchUsers={this.props.getSearchUsers} />
					<StarList
						auth={this.props.auth}
						stars={this.props.stars}
						getCorelatedUser={this.props.getCorelatedUser}
						getStars={this.props.getStars}
					/>
					<UserList
						auth={this.props.auth}
						users={this.props.users}
						starUser={this.props.starUser}
						getConnectedUsers={this.props.getConnectedUsers}
						getCorelatedUser={this.props.getCorelatedUser}
					/>
				</Container>
			)
		);
	}
}

export default UserComponent;
