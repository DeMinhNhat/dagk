import React, { Component } from "react";
import { Container } from "reactstrap";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

class MessageComponent extends Component {
    componentDidMount() {
        if (this.props.auth.isUserSignedIn) {
            this.props.getSentMessages();
        }
    }

    render() {
            return (
                    this.props.auth.isUserSignedIn  && (
                       <Container>
          <MessageList
           messages={this.props.messages}
            corelatedUser={this.props.corelatedUser}
            auth={this.props.auth}
          />
          <MessageInput
            sendMessage={this.props.sendMessage}
              corelatedUser={    this.props.corelatedUser}
          />
        </    Container>
      )
    );
  }
}

export default MessageComponent;