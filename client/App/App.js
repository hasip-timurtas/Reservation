import React from 'react';

import ShowRooms from './Components/showRooms';
import NewReservation from './Components/newReservation';
import { createContainer } from 'meteor/react-meteor-data';
import { Rooms, Reservations } from '../../imports/api/rooms.js';


export class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row">
              <ShowRooms />
            </div>
        )
    }

}


export default createContainer(() => {

  Meteor.subscribe('getRooms');
  Meteor.subscribe('getReservations');

  return {
    rooms: Rooms.find({}).fetch(),
    reservations: Reservations.find({}).fetch(),
    //currentUser: Meteor.user(),
  };
}, App);
