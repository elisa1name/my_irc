import React from "react";
import io from "socket.io-client";




class Header extends React.Component{
    constructor(props){
        super(props);
 
    }

   

    render(){

        const divChat = {
            marginLeft: '465px',
            fontSize: '25px',
          };
        const divButton = {
            display: 'flex'
          };
        const divConnection = {
            background: 'white',
            border: '2px solid #20B2AA',
            width: '100px',
            height: '30px',
            color: 'Black',
            marginLeft: '900px'
          };
          const divDeconnection = {
            background: 'white',
            border: '2px solid #20B2AA',
            width: '100px',
            height: '30px',
            color: 'Black',
            marginLeft: '5px',
            
          };
        
        return (
            <div>
                <h1 style={divChat}>Welcome Appli Chat</h1>
           <div  style={divButton}>
               <button onClick={this.sendMessage} className="btn btn-primary form-control" style={divConnection}>Connection</button>
               <button onClick={this.sendMessage} className="btn btn-primary form-control" style={divDeconnection}>Deconnection</button>
           </div>
           </div>
        );
    }
}

export default Header;