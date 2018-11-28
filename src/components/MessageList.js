import moment from "moment";
import React from "react";
import { Container, Row, Badge, Alert } from "reactstrap";

const MessageList = ({ messages, corelatedUser, auth }) => (
	<Container>
		{messages
			.filter(
				msg =>
					(msg.uid === corelatedUser.uid && msg.to === auth.uid) ||
          (msg.uid === auth.uid && msg.to === corelatedUser.uid)
			)
			.map(
				msg =>
					msg.uid === auth.uid && msg.to === corelatedUser.uid ? (
						<Row
							key={msg.id}
							style={{ float: "right", clear: "both", margin: "2px" }}
						>
							<Alert color="info">
								<h6 style={{ textAlign: "center", margin: "auto" }}>
									<Badge color="info">
										{msg.displayName} | {moment(msg.createdAt).format("lll")}
									</Badge>
								</h6>
								{msg.message}
							</Alert>
						</Row>
					) : (
						<Row
							key={msg.id}
							style={{ float: "left", clear: "both", margin: "2px" }}
						>
							<Alert color="info">
								<h6 style={{ textAlign: "center", margin: "auto" }}>
									<Badge color="info">
										{msg.displayName} | {moment(msg.createdAt).format("lll")}
									</Badge>
								</h6>
								{msg.message}
							</Alert>
						</Row>
					)
			)}
	</Container>
);

export default MessageList;
