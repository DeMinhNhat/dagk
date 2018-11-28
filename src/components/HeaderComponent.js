import { Container, Row, Col, Badge, Button } from "reactstrap";
import React, { Component } from "react";

class HeaderComponent extends Component {
	render() {
		return (
			this.props.auth.isUserSignedIn && (
				<Container>
					<Row style={{ textAlign: "center", margin: "auto" }}>
						{this.props.corelatedUser !== "" && (
							<Col style={{ textAlign: "center", margin: "auto" }}>
								<Row style={{ textAlign: "center", margin: "auto" }}>
									<img
										src={`${this.props.corelatedUser.photoURL}`}
										alt="avatar"
										style={{ width: "80px", height: "80px" }}
									/>
								</Row>
								<Row style={{ textAlign: "center", margin: "auto" }}>
									<h4>
										<Badge color="info">
											{this.props.corelatedUser.displayName}
										</Badge>
									</h4>
								</Row>
							</Col>
						)}
						<Col />
						<Col />
						<Col style={{ textAlign: "center", margin: "auto" }}>
							<Row style={{ textAlign: "center", margin: "auto" }}>
								<img
									src={`${this.props.auth.photoURL}`}
									alt="avatar"
									style={{ width: "80px", height: "80px" }}
								/>
							</Row>
							<Row style={{ textAlign: "center", margin: "auto" }}>
								<Button
									color="info"
									onClick={this.props.onSignOut}
									style={{ margin: 3, padding: 0, width: "80px" }}
								>
									<h6>Sign out..</h6>
								</Button>
							</Row>
						</Col>
					</Row>
				</Container>
			)
		);
	}
}

export default HeaderComponent;
