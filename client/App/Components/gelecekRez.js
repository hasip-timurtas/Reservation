import React from 'react';
import { Reservations } from '../../../imports/api/rooms';
import SingleGelRez from './singleGelRez';
import ReservationModal from './reservationModal';

export default class GelecekRez extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          reservation : null
        };
    }


    allReservations(){
      return Reservations.find({status:'A'});
    }

    onResClick(res){
      this.setState({reservation : res });
    }

    render() {

      var reservations = this.allReservations().map(res => {
         return <SingleGelRez res={res} key={res._id} onResClick={this.onResClick.bind(this)} />;
      });

        return (
            <div className="col-md-3 gelecekRezervasyonlar">
              <div className="list-group">
                <a href="#" className="list-group-item disabled"><strong>Gelecek Rezervasyonlar</strong> </a>
                {reservations}
              </div>
              <ReservationModal res={this.state.reservation}/>
            </div>
        )
    }
}
