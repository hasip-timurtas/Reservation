import React from 'react';
import { Reservations } from '../../../imports/api/rooms';
import SingleGelRez from './singleGelRez';

export default class GelecekRez extends React.Component {

    allReservations(){
      return Reservations.find({status:'A'});
    }

    render() {

      var reservations = this.allReservations().map(res => {
         return <SingleGelRez res={res} key={res._id} />;
      });

        return (
            <div className="col-md-3 gelecekRezervasyonlar">
              <div className="list-group">
                <a href="#" className="list-group-item disabled"><strong>Gelecek Rezervasyonlar</strong> </a>
                {reservations}
              </div>
            </div>
        )
    }
}
