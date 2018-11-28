import React, { Component } from "react";
import moment from "moment";
import {
	Container,
	Badge,
	Row,
	CardImg,
	Card,
	CardBody,
	CardSubtitle,
	Button,
} from "reactstrap";

class UserList extends Component {
	componentDidMount() {
		if (this.props.auth.isUserSignedIn) {
			this.props.getConnectedUsers();
		}
	}

	render() {
		return (
			this.props.auth.isUserSignedIn &&
            (<Container>
            	<h2 style={{ textAlign: "center", margin: "auto" }}>
            		<Badge color="success">Người dùng</Badge>
            	</h2>
            	{this.props.users.map(
            		user =>
            			this.props.auth.uid !== user.uid && (
            				<Row
            					key={user.uid}
            					style={{ textAlign: "center", margin: "auto" }}
            					onClick={() => {
            						this.props.getCorelatedUser(user);
            					}}
            				>
            					<Card style={{ textAlign: "center", margin: "auto" }}>
            						<CardImg
            							src={`${user.photoURL}`}
            							alt="avatar"
            							style={{ width: "80px", height: "auto", margin: "auto" }}
            						/>
            						<CardBody>
            							<h4>
            								<Badge
            									color="info"
            									style={{ margin: "auto", textAlign: "center" }}
            								>
            									{user.displayName}
            								</Badge>
            							</h4>
            							<CardSubtitle
            								style={{ margin: "auto", textAlign: "center" }}
            							>
                        Đăng nhập lúc:{" "}
            							</CardSubtitle>
            							<h5>
            								<Badge
            									color="info"
            									style={{ margin: "auto", textAlign: "center" }}
            								>
            									{moment(user.lastTimeLoggedIn).format("lll")}
            								</Badge>
            							</h5>
            							<Button
            								color="info"
            								onClick={() => {
            									this.props.starUser(user, this.props.auth.uid);
                                        }}
            							>
                        Star
            							</Button>
            						</CardBody>
            					</Card>
            				</Row>
            			)
            	)}
            </Container>));
	}
}

export default UserList;