import React from "react";
import { connect } from "react-redux";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import { sendMessage, retrieveMessage } from "./messageActions";
import PropTypes from "prop-types";

const Message = ({
  isUserSignedIn,
  messages,
  retrieveMessage,
  sendMessage,
  corelatedUser,
  auth
}) =>
  isUserSignedIn ? (
    <div>
      <MessageList
        retrieveMessage={retrieveMessage}
        messages={messages}
        corelatedUser={corelatedUser}
        auth={auth}
      />
      <MessageInput sendMessage={sendMessage} corelatedUser={corelatedUser} />
    </div>
  ) : (
    <div style={{ textAlign: "center", left: "50%" }}>
      <span>You need to sign in to see messages!!</span>
    </div>
  );

Message.propTypes = {
  retrieveMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  userMessage: PropTypes.object.isRequired,
  isUserSignedIn: PropTypes.bool.isRequired,
  messages: PropTypes.array.isRequired,
  corelatedUser: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userMessage: state.userMessage,
  isUserSignedIn: state.auth.isUserSignedIn,
  messages: state.messages,
  corelatedUser: state.corelatedUser,
  auth: state.auth
});

export default connect(mapStateToProps, {
  sendMessage: sendMessage,
  retrieveMessage: retrieveMessage
})(Message);
