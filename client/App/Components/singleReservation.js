import React from 'react';

export default class SingleReservation extends React.Component {
    sendReservationId() {
      //this.props.showCust(this.props.reservation);

      //console.log(this.props.reservation);
    }

    render() {
        return (
            <div  onClick={this.sendReservationId.bind(this)}>

              <div className="musteri">
                <p>
                  <i className="fa fa-male fa-2x" aria-hidden="true"></i> {this.props.reservation.oda}
                  <br />
                  <i className="fa fa-sign-in fa-2x" aria-hidden="true"></i>  {this.props.reservation.giris}
                  <br />
                  <i className="fa fa-sign-out fa-2x" aria-hidden="true"></i> {this.props.reservation.cikis}
                  <br />
                  <i className="fa fa-money fa-2x" aria-hidden="true"></i> {this.props.reservation.ucret} TL
                </p>
               </div>
            </div>


        )
    }
}
