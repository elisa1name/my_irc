import React from "react";
import io from "socket.io-client";




class SideBar extends React.Component{
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
        const divSide = {
            border: '2px solid #20B2AA',
            width: '300px',
            height: '500px',
            background: '#20B2AA'
           };
           
        const divUser= {
            width: '280px',
            height: '20px',
            marginLeft: '5px',
            marginTop: '7px'
           };
        
        return (
           
                            <div className="card-footer">
            <div style={divSide}><input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control" style={divUser} /></div>
                                <br/>
                            </div>
        );
    }
}

export default SideBar;