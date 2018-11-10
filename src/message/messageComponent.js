import React from "react";
import PropTypes from "prop-types";
import { Container, Badge } from "reactstrap";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

const MessageComponent = ({ corelatedUser, messages, sendMessage, auth }) =>
  auth.isUserSignedIn ? (
    <Container>
      <MessageList
        messages={messages}
        corelatedUser={corelatedUser}
        auth={auth}
      />
      <MessageInput sendMessage={sendMessage} corelatedUser={corelatedUser} />
    </Container>
  ) : (
    <Container style={{ textAlign: "center", left: "50%" }}>
      <h4>
        <Badge color="info">You need to sign in to see messages!!</Badge>
      </h4>
    </Container>
  );

MessageComponent.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  corelatedUser: PropTypes.object.isRequired
};

export default MessageComponent;
