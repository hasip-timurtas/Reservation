import React from 'react';

export default class SingleReservation extends React.Component {
    sendReservationId() {
      //this.props.showCust(this.props.reservation);

      console.log(this.props.reservation);
    }

    render() {
        return (
            <div  onClick={this.sendReservationId.bind(this)}> <h2>{this.props.reservation.oda}</h2></div>
        )
    }
}
