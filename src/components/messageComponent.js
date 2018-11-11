import React from "react";
import { Container, Badge } from "reactstrap";
import { BrowserRouter as Link } from "react-router-dom";
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
        <hr/>
        <Badge color="info"><Link to="/" style={{ color:"white" }}>Sign In!!</Link></Badge>
      </h4>
    </Container>
  );

export default MessageComponent;
