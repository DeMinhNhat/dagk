import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {
  Container,
  Badge,
  Row,
  CardImg,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle
} from "reactstrap";

const UsersComponent = ({ users, auth, getCorelatedUser }) => (
  <Container>
    <h2 style={{ textAlign: "center", marginRight: "30px" }}>
      <Badge color="info">Người dùng</Badge>
    </h2>
    {users.map(
      user =>
        auth.uid !== user.uid ? (
          <Row
            key={user.uid}
            style={{ margin: "2px" }}
            onClick={() => {
              getCorelatedUser(user);
            }}
          >
            <Card>
              <CardImg
                src={`${user.photoURL}`}
                alt="avatar"
                style={{ width: "80px", height: "auto", margin: "auto" }}
              />
              <CardBody>
                <CardTitle style={{ margin: "auto", textAlign: "center" }}>
                  {user.displayName}
                </CardTitle>
                <CardSubtitle style={{ margin: "auto", textAlign: "center" }}>
                  Đăng nhập lúc:{" "}
                </CardSubtitle>
                <CardText style={{ margin: "auto", textAlign: "center" }}>
                  {moment(user.lastTimeLoggedIn).format("lll")}
                </CardText>
              </CardBody>
            </Card>
          </Row>
        ) : (
          <div />
        )
    )}
  </Container>
);

UsersComponent.propTypes = {
  getCorelatedUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
};

export default UsersComponent;
