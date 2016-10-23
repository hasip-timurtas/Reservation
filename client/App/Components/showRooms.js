import React from 'react';

import SingleRoom from './singleRoom';
import SingleReservation from './singleReservation';
import { Rooms, Reservations } from '../../../imports/api/rooms.js';

export default class ShowRooms extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          reservations : []
        };

        this.showCustomers = this.showCustomers.bind(this);
    }

    loadData(){
      return  Rooms.find();
    }

    showCustomers(){
      console.log(this.room._id);
      this.setState({
        reservations : Reservations.find({room_id : this.room._id })
      });
    }


    render() {

        var rooms = this.loadData().map(room => {
           return <SingleRoom room={room} key={room._id} showCust={this.showCustomers} />;
        });

        var customers = this.state.reservations.map(reservation=>{
            return <SingleReservation reservation={reservation} key={reservation._id} />;
        });

        return (
          <div>
            <h1> ODALAR</h1>
            <div className="row odalar" >
              {rooms}
              {customers}
              <div> <h2>301</h2></div>
              <div> <h2>302</h2>
                <i className="fa fa-female fa-2x" aria-hidden="true"></i>
                <i className="fa fa-male fa-2x" aria-hidden="true"></i>
              </div>
              <div> <h2>303</h2></div>
              <div> <h2>304</h2></div>
              <div> <h2>305</h2></div>
              <div> <h2>306</h2></div>
              <div> <h2>307</h2></div>
            </div>
          </div>
      )

    }
}
