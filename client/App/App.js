import React from 'react'

import ShowRooms from './Components/room/showRooms'
import NewReservation from './Components/reservation/newReservation'
import { createContainer } from 'meteor/react-meteor-data'
import { Rooms, Reservations, GelirGider } from '../../imports/api/rooms.js'


export class App extends React.Component {
	constructor() {
		super()
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

	Meteor.subscribe('getRooms')
	Meteor.subscribe('getReservations')
	Meteor.subscribe('getGelirGider')

	return {
		rooms: Rooms.find({}).fetch(),
		reservations: Reservations.find({}).fetch(),
		gelirGiders: GelirGider.find({}).fetch()
    //currentUser: Meteor.user(),
	}
}, App)
