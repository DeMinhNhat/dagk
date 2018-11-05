import React, { Component } from "react";
import firebase from "firebase";

export default class MessageList extends Component {
  componentDidMount() {
    this._firebaseRef = firebase.database().ref("messages");
    this._firebaseRef.on("child_added", snapshot => {
      const { uid, displayName, message, createdAt } = snapshot.val();
      this.props.retrieveMessage({ uid, displayName, message, createdAt });
    });
  }

  render() {
    const { messages } = this.props;

    return (
      <div class="chat-history">
        <ul>
          {messages.map(msg => (
            <li>
              <div class="message-data">
                <span class="message-data-name">
                  <i class="fa fa-circle online" /> {msg.displayName}
                </span>
                <span class="message-data-time">{msg.createdAt}</span>
                <div>{msg.message}</div>
              </div>
              <i class="fa fa-circle online" />
              <i class="fa fa-circle online" style={{ color: "#AED2A6" }} />
              <i class="fa fa-circle online" style={{ color: "#DAE9DA" }} />
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
