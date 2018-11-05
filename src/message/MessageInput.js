import React from "react";
import PropTypes from "prop-types";
import { Button, Container } from "reactstrap";

let myInput;
const MessageInput = ({ sendMessage }) => (
  <div class="chat-message clearfix">
    <i class="fa fa-file-o" /> &nbsp;&nbsp;&nbsp;
    <i class="fa fa-file-image-o" />
    <input
      type="text"
      ref={ref => (myInput = ref)}
      onKeyUp={({ keyCode }) => {
        if (keyCode === 13) {
          sendMessage(myInput.value);
          myInput.value = "";
        }
      }}
    />
    <Button
      onClick={() => {
        sendMessage(myInput.value);
        myInput.value = "";
      }}
    >
      Send
    </Button>
  </div>
);

MessageInput.propTypes = {
  sendMessage: PropTypes.func.isRequired
};

export default MessageInput;
