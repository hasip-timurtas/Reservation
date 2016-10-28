import React from 'react';

export default class SingleRoom extends React.Component {
    sendRoomId() {
      this.props.showCust(this.props.room._id);
    }

    render() {
        return (
            <div  onClick={this.sendRoomId.bind(this)}> <h2>{this.props.room.Name}</h2></div>
        )
    }
}
