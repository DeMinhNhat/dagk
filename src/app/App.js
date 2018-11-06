import React, { Component } from "react";
import HeaderContainer from "./../auth/HeaderContainer";
import MessageContainer from "./../message/MessageContainer";
import UsersContainer from "../user/UsersContainer";

class App extends Component {
  render() {
    return (
      <div className="container clearfix" style={{textAlign: "center"}}>
        <div className="people-list" id="people-list" style={{float: "left", width: "300px", display: "inline"}}>
          <UsersContainer />
        </div>
        <div className="chat" style={{display: "inline"}}>
          <div className="chat-header clearfix">
            <HeaderContainer />
          </div>
          <MessageContainer />
        </div>
      </div>
    );
  }
}

export default App;
