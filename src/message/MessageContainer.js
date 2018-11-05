import React, { Component } from "react";
import { connect } from "react-redux";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import { sendMessage, retrieveMessage } from "./messageActions";
import PropTypes from "prop-types";

const Message = ({
  isUserSignedIn,
  messages,
  retrieveMessage,
  sendMessage
}) => (
  <div>
    <MessageList retrieveMessage={retrieveMessage} messages={messages} />
    {isUserSignedIn && <MessageInput sendMessage={sendMessage} />}
  </div>
);

Message.propTypes = {
  retrieveMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  userMessage: PropTypes.string.isRequired,
  isUserSignedIn: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  userMessage: state.userMessage,
  isUserSignedIn: state.auth.isUserSignedIn,
  messages: state.messages
});

export default connect(mapStateToProps, {
  sendMessage: sendMessage,
  retrieveMessage: retrieveMessage
})(Message);
