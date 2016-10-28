import React from 'react';
import SingleRoom from './singleRoom';
import {getCurrentDate} from './currentDate';
import RezDate from './rezDate';
import SingleReservation from './singleReservation';
import { Rooms, Reservations } from '../../../imports/api/rooms.js';

export default class ShowRooms extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          reservations : [],
          startDate : getCurrentDate()
        };
    }

    loadData(){
      return  Rooms.find();
    }


    showCustomers(room_id){
      var roomNumber =Rooms.findOne({_id : room_id});

      this.setState({
        reservations : Reservations.find({oda :roomNumber.Name, giris : this.state.startDate})
      });
    }

    onRezDateChange(date){

      this.setState({
        startDate : date
      });

    }

    render() {

        var rooms = this.loadData().map(room => {
           return <SingleRoom room={room} key={room._id} showCust={this.showCustomers.bind(this)} />;
        });

        var customers = this.state.reservations.map(reservation=>{
            return <SingleReservation reservation={reservation} key={reservation._id} />;
        });

        return (
           <div>
            <h1> ODALAR</h1>


            <RezDate onDateChange={this.onRezDateChange.bind(this)}/>
            <div className="row odalar" >
              {rooms}
            </div>
            <div className="row musteriler">
              {customers}
            </div>
          </div>
      )

    }
}
