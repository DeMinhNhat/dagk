import React from "react";
import PropTypes from "prop-types";
import { Button, Row } from "reactstrap";

let myInput;
const MessageInput = ({ sendMessage, corelatedUser }) => (
  <Row style={{ float: "right", clear: "both", margin: "2px" }}>
    <input
      type="text"
      ref={ref => (myInput = ref)}
      onKeyUp={({ keyCode }) => {
        if (keyCode === 13) {
          if (corelatedUser !== "null" && myInput.value !== "") {
            sendMessage(myInput.value);
            myInput.value = "";
          }
        }
      }}
    />
    <Button
      color="info"
      onClick={() => {
        if (corelatedUser !== "null" && myInput.value !== "") {
          sendMessage(myInput.value);
          myInput.value = "";
        }
      }}
    >
      Send
    </Button>
  </Row>
);

MessageInput.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  corelatedUser: PropTypes.object.isRequired
};

export default MessageInput;
