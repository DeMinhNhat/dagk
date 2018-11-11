import React from "react";
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

export default MessageInput;
