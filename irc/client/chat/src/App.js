import React from 'react';
import logo from './soleil.svg';
import './App.css';
import Form from "./components/Form.js";
import Chat from "./components/Chat.js";


class App extends React.Component {
    render(){
      return (
        <body>
        <div className="App">
        <h1>Welcome My Chat</h1>
        </div>
        <Chat />
        </body>
      )
    }
  }

export default App;