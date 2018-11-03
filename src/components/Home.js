import firebase from "firebase";
import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const Home = ({})=>  {
    return (
     <div className="App">
            <Card className="Card">
              <CardImg
                alt="profile picture"
                src={firebase.auth().currentUser.photoURL}
              />
              <CardBody>
                <CardTitle>
                  Welcome {firebase.auth().currentUser.displayName}
                </CardTitle>
                <CardText>How are you today? :)</CardText>
                <Button color="info" onClick={() => firebase.auth().signOut()}>
                  Sign out
                </Button>
              </CardBody>
            </Card>
          </div>
    );
};

export default Home;