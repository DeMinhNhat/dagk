import React, { Component } from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import moment from "moment";

export default class MessageList extends Component {
  componentDidMount() {
    this._firebaseRef = firebase.database().ref("messages");
    this._firebaseRef.on("child_added", snapshot => {
      const id = snapshot.key;
      const { uid, displayName, message, createdAt, to } = snapshot.val();
      this.props.retrieveMessage({
        id,
        uid,
        displayName,
        message,
        createdAt,
        to
      });
    });
  }

  render() {
    const { messages, corelatedUser, auth } = this.props;

    return (
      <div className="chat-history">
        <ul>
          {messages
            .filter(
              msg =>
                (msg.uid === corelatedUser && msg.to === auth.uid) ||
                (msg.uid === auth.uid && msg.to === corelatedUser)
            )
            .map(msg => (
              <li key={msg.id}>
                <div style={{ visibility: "hidden" }}>{corelatedUser}</div>
                <div className="message-data">
                  <span className="message-data-name">
                    <i className="fa fa-circle online" /> {msg.displayName}
                  </span>
                  <br />
                  <span className="message-data-name">
                    <i className="fa fa-circle online" />FROM: {msg.uid}
                  </span>
                  <br />
                  <span className="message-data-name">
                    <i className="fa fa-circle online" />TO: {msg.to}
                  </span>
                  <br />
                  <span className="message-data-time">
                    {moment(msg.createdAt).format("lll")}
                  </span>
                  <div>Message: {msg.message}</div>
                </div>
                <i className="fa fa-circle online" />
                <i
                  className="fa fa-circle online"
                  style={{ color: "#AED2A6" }}
                />
                <i
                  className="fa fa-circle online"
                  style={{ color: "#DAE9DA" }}
                />
                <hr />
              </li>
            ))}
        </ul>
      </div>
    );
  }

  componentWillUnmount() {
    this._firebaseRef.off();
  }
}

MessageList.propTypes = {
  retrieveMessage: PropTypes.func.isRequired,
  corelatedUser: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
