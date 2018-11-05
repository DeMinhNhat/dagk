import React, { Component } from "react";
import firebase from "firebase";

export default class UsersComponent extends Component {
  componentDidMount() {
    firebase
      .database()
      .ref("users")
      .on("child_added", snapshot => {
        this.props.addConnectedUser({
          uid: snapshot.key,
          userPayload: snapshot.val()
        });
      });
  }

  showUsersList(users) {
    return users
      ? Object.keys(users).reduce((list, uid) => {
          return [...list, { uid, ...users[uid] }];
        }, [])
      : [];
  }

  render() {
    const { users } = this.props;

    return (
      <ul class="list">
        {this.showUsersList(users).map(user => (
          <li class="clearfix">
            <img
              src={`${user.photoURL}`}
              alt="avatar"
              style={{ width: "80px", height: "auto" }}
            />
            <div class="about">
              <div class="name">{user.displayName}</div>
              <div class="status">
                <i class="fa fa-circle online" /> online
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
