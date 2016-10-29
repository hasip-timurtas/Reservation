import React from 'react';

export default class SingleReservation extends React.Component {
    sendReservationId() {
      console.log("müşteri bilgisi");
    }

    render() {
        return (
            <div  onClick={this.sendReservationId.bind(this)}>

              <div className="musteri">
                <table>
                  <tbody>
                    <tr>
                      <th> <i className="fa fa-male fa-2x" aria-hidden="true"></i> </th>
                      <td> {this.props.reservation.isim} </td>
                    </tr>
                    <tr>
                      <th> <i className="fa fa-sign-in fa-2x" aria-hidden="true"></i>  </th>
                      <td> {this.props.reservation.giris} </td>
                    </tr>
                    <tr>
                      <th> <i className="fa fa-sign-out fa-2x" aria-hidden="true"></i></th>
                      <td> {this.props.reservation.cikis} </td>
                    </tr>
                    <tr>
                      <th> <i className="fa fa-money fa-2x" aria-hidden="true"></i> </th>
                      <td> {this.props.reservation.ucret} TL </td>
                    </tr>
                    <tr>
                      <th> Parası Çekildimi? </th>
                      <td> {this.props.reservation.odemeBilgisi}</td>
                    </tr>
                  </tbody>
                </table>

               </div>
            </div>


        )
    }
}
