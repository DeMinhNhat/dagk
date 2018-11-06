import React, { Component } from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import moment from "moment";

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
    const { users, getCorelatedUser, auth } = this.props;

    return (
      <ul className="list">
        {this.showUsersList(users).map(
          user =>
            auth.uid !== user.uid ? (
              <li className="clearfix"
                key={user.uid}
                onClick={() => {
                  getCorelatedUser(user.uid);
                }}
              >
                <hr />
                <img
                  src={`${user.photoURL}`}
                  alt="avatar"
                  style={{ width: "80px", height: "auto" }}
                />
                <div>
                  <div>{user.displayName}</div>
                  <span>Đăng nhập lúc: </span>
                  <span>{moment(user.lastTimeLoggedIn).format("lll")}</span>
                </div>
              </li>
            ) : (
              <div />
            )
        )}
      </ul>
    );
  }
}

UsersComponent.propTypes = {
  getCorelatedUser: PropTypes.func.isRequired,
  addConnectedUser: PropTypes.func.isRequired
};
