import React from "react";
import moment from "moment";
import {
  Container,
  Row,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle
} from "reactstrap";

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
              <Card>
                <CardBody>
                  <CardTitle>{msg.displayName}</CardTitle>
                  <CardSubtitle>
                    {moment(msg.createdAt).format("lll")}
                  </CardSubtitle>
                  <CardText>Message: {msg.message}</CardText>
                </CardBody>
              </Card>
            </Row>
          ) : (
            <Row
              key={msg.id}
              style={{ float: "left", clear: "both", margin: "2px" }}
            >
              <Card>
                <CardBody>
                  <CardTitle>{msg.displayName}</CardTitle>
                  <CardSubtitle>
                    {moment(msg.createdAt).format("lll")}
                  </CardSubtitle>
                  <CardText>Message: {msg.message}</CardText>
                </CardBody>
              </Card>
            </Row>
          )
      )}
  </Container>
);

export default MessageList;
