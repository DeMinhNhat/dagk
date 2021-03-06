import { Button, Row } from "reactstrap";
import React from "react";

let myInput;
const MessageInput = ({ sendMessage, corelatedUser }) => (
	<Row style={{ float: "right", clear: "both", margin: "2px" }}>
		<input
			type="text"
			ref={ref => (myInput = ref)}
			onKeyUp={({ keyCode }) => {
				if (keyCode === 13) {
					if (corelatedUser !== "" && myInput.value !== "") {
						sendMessage(myInput.value);
						myInput.value = "";
					}
				}
			}}
		/>
		<Button
			color="info"
			onClick={() => {
				if (corelatedUser !== "" && myInput.value !== "") {
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