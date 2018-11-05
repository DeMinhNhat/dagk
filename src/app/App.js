import React, { Component } from "react";
import HeaderContainer from "./../auth/HeaderContainer";
import MessageContainer from "./../message/MessageContainer";
import UsersContainer from "../user/UsersContainer";

class App extends Component {
  render() {
    return (
      <div class="container clearfix">
        <div class="people-list" id="people-list">
          <UsersContainer />
        </div>
        <div class="chat">
          <div class="chat-header clearfix">
            <HeaderContainer />
          </div>
          <MessageContainer />
        </div>
      </div>
    );
  }
}

export default App;
