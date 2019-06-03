import React from "react";
import io from "socket.io-client";




class Form extends React.Component{
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
        const divStyle = {
            background: '#20B2AA',
            width: '800px',
            height: '50px',
            border: '2px solid lightgray',
            marginTop: '-450px',
            marginLeft: '305px'
          };

          const divButton = {
            width: '50px',
            height: '50px',
            background: '#20B2AA',
            marginTop: '-290px',
            marginLeft: '1117px',
            border: '2px solid lightgray',
          };

        
        
        return (
            <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body" >
                           
                           
                            
                            
                        </div>
                            <div className="card-footer">
                                <input type="text" placeholder="Message..." className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}style={divStyle}/>
                                <br/>
                                <button onClick={this.sendMessage} className="btn btn-primary form-control" style={divButton}>Send</button>
                            </div>
                  
                            </div>
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;