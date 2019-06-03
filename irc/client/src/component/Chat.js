import React from "react";
import io from "socket.io-client";




class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };
       
        this.socket = io('localhost:8000');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});
        }
        
    }

   

    render(){
        const divChat = {
           border: '2px solid lightgrey',
           padding: '100px',
           width: '600px',
           height: '300px',
           marginLeft: '305px',
           float: 'left'
          };
       
         return (
           
            <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body" >
                           
                           
                           <div style={divChat}>
                            <div className="messages" >
                                {this.state.messages.map(message => {
                                    return (
                                        <div>{message.author}: {message.message}</div>
                                    )
                                })}
                            </div>
                            </div> 
                        </div>
                            </div>
                            </div>
                    </div>
                </div>
            
            
        );
    }
}

export default Chat;