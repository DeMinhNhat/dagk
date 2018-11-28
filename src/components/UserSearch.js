import { Button, Row } from "reactstrap";
import React from "react";

let myInput;
const UserSearch = ({ getSearchUsers }) => (
	<Row style={{ float: "right", clear: "both", margin: "2px" }}>
		<input
			type="text"
			ref={ref => (myInput = ref)}
			onKeyUp={({ keyCode }) => {
				if (keyCode === 13) {
					getSearchUsers(myInput.value);
					myInput.value = "";
				}
			}}
		/>
		<Button
			color="info"
			onClick={() => {
				getSearchUsers(myInput.value);
				myInput.value = "";
			}}
		>
  Search
		</Button>
	</Row>
);

export default UserSearch;