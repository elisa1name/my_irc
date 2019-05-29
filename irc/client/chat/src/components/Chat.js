import React from 'react';
import './Chat.css';

class Chat extends React.Component{
    render(){
        return(
            <div>
    <footer>
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" placeholder="envoyer un message" />
      <button className="send">Send</button>
    </form>
    </footer>
    </div>
        );
    }
}
export default Chat;