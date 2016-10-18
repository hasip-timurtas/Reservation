import React from 'react';

export default class SingleRoom extends React.Component {
    showNote() {
    //    this.props.showNote(this.props.notem);
    }

    render() {
        return (
            <div  onClick={this.showNote.bind(this)}> <h2>{this.props.roomum.name}</h2></div>
        )
    }
}
