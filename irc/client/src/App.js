import React, { Component } from 'react';
import Chat from "./component/Chat.js";
import SideBar from "./component/SideBar.js";
import Form from "./component/Form.js";
import Header from "./component/Header.js";

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Chat />
          <SideBar />
          <Form />
      </div>
     
    );
  }
}

export default App;
