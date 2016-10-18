import React from 'react';

import ShowRooms from './Components/showRooms';
import NewReservation from './Components/newReservation';

Reservations = new Meteor.Collection("reservations");
Rooms = new Meteor.Collection("rooms");
Meteor.subscribe("getReservations");
Meteor.subscribe("getRooms");


export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row">
              <ShowRooms />
              <NewReservation />
            </div>
        )
    }

}
