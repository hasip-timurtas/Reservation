import React from 'react'
import { Rooms, Reservations } from '../../../../imports/api/rooms'
import moment from 'moment'
import { createContainer } from 'meteor/react-meteor-data'

const RoomName = ({ name }) =>{
	return(
		<tr>
       <th>{name}</th>
		</tr>
	)}




class RoomStatus extends React.Component {
	render() {

		var roomsNames = Rooms.find().map(room => {
			return <RoomName room={room.Name} key={room._id} />
		})

		return (
			<div className="room-status"> Oda Durumu
				<div className="row">
					<div className="col-md-1">
						<table>
							<thead>
								<tr>
									<th> Odalar </th>
								</tr>
							</thead>
							<tbody>
								{roomsNames}
							</tbody>
						</table>
					</div>
					<div className="col-md-11">
						<table>
							<thead>
								<tr>
									<th>01.02.1991 </th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td> Deneme </td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

export default createContainer(() => {

	Meteor.subscribe('getRooms')

	return {
		rooms: Rooms.find({}).fetch()
	}
}, RoomStatus)
