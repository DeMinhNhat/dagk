import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

let myInput;
const MessageInput = ({ sendMessage, corelatedUser }) => (
  <div
    className="chat-message clearfix"
    style={{ textAlign: "center", left: "50%" }}
  >
    <i className="fa fa-file-o" /> &nbsp;&nbsp;&nbsp;
    <i className="fa fa-file-image-o" />
    <input
      type="text"
      ref={ref => (myInput = ref)}
      onKeyUp={({ keyCode }) => {
        if (keyCode === 13) {
          if (corelatedUser !== "null"&&myInput.value!=="") {
            sendMessage(myInput.value);
            myInput.value = "";
          }
        }
      }}
    />
    <Button
      onClick={() => {
        if (corelatedUser !== "null"&&myInput.value!=="") {
          sendMessage(myInput.value);
          myInput.value = "";
        }
      }}
    >
      Send
    </Button>
  </div>
);

MessageInput.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  corelatedUser: PropTypes.object.isRequired
};

export default MessageInput;
