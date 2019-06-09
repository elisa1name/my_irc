import React, { Component } from 'react';

class RoomList extends Component {
    render() {
        return (
            <div className="roomList">
                <h2 className="headline">
                    Rooms
                </h2>
                <div id="rooms">
                    <ul>
                        {this.props.rooms.map((room, index) => (
                            <li key={index}>
                                <i className="fas fa-circle"></i>
                                <span>
                                    {room}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        )
    }
}

export default RoomList;
