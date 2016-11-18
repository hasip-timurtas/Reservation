import React from 'react'
import { Rooms } from '../../../../imports/api/rooms'
import NewRoom from './newRoom'
import moment from 'moment'

import { createContainer } from 'meteor/react-meteor-data'

const SingleRoom = ({ room }) =>{

	return(
     <tr>
       <td>{room._id}</td>
       <td>{room.Name}</td>
       <td>{room.Full}</td>
       <td className="remove-room" onClick={(e) => 	Meteor.call('deleteRoom', room._id)}><i className="fa fa-trash fa-lg" aria-hidden="true"></i></td>
     </tr>
	)}


const PreviewRooms = () => {
	var rooms = Rooms.find().map(room => {
		return <SingleRoom room={room} key={room._id} />
	})

	return (
    <table className="table table-bordered gelirgider-table">
      <thead>
        <tr>
          <th className="room-id">ID</th>
          <th>Name</th>
          <th>FULL</th>
          <th>Edit </th>
        </tr>
      </thead>
      <tbody>
        {rooms}
      </tbody>
    </table>
	)}


export class ManageRooms extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			ggDate : moment().format('YYYY-MM-DD'),
			topGelir : 0,
			topGider : 0
		}
	}

	render() {
		return (
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <PreviewRooms />
              </div>
            </div>
            <div className="row">
              <NewRoom />
            </div>
          </div>
		)
	}
}

export default createContainer(() => {

	Meteor.subscribe('getRooms')

	return {
		gelirGiders: Rooms.find({}).fetch()
	}
}, ManageRooms)
