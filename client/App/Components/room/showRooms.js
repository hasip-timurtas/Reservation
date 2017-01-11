import React from 'react'
import SingleRoom from './singleRoom'
import RezDate from '../rezDate'
import SingleReservation from '../reservation/singleReservation'
import { Rooms, Reservations } from '../../../../imports/api/rooms'
import GelecekRez from '../reservation/gelecekRez'
import moment from 'moment'

export default class ShowRooms extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			reservations : [],
			startDate : moment().format('YYYY-MM-DD')
		}
	}

	loadData(){
		return  Rooms.find()
	}


	showCustomers(room_id){
		var roomNumber =Rooms.findOne({_id : room_id})

		this.setState({
			reservations : Reservations.find({oda :roomNumber.Name, giris : this.state.startDate})
		})
	}

	onRezDateChange(date){
		this.setState({
			startDate : date
		})
	}

	render() {

      /*
        oda ismi bulunacak örneğin : 301 bununla rezervasyonlar tablosuna gidilecek ve tarih belirtilecek. Bu tarih ve odaya
        göre rezervasyon var ise renk yeliş yok ise renk gri olacak.
      */
		var rooms = this.loadData().map(room => {

			var renk='gri'
			var roomNumber =Rooms.findOne({_id : room._id})
			var rezCount = Reservations.find({oda : roomNumber.Name, giris : this.state.startDate }).count()
			if (rezCount >0) {
				renk='yesil'
			}
			return <SingleRoom room={room} key={room._id} showCust={this.showCustomers.bind(this)} renk={renk} />
		})

		var customers = this.state.reservations.map(reservation=>{
			return <SingleReservation reservation={reservation} key={reservation._id} />
		})

		return (
           <div>
             <div className="col-md-9">
              <h1> ODALAR</h1>

              <div className="row">
                <div className="=form-group rezDate">
                  <RezDate onDateChange={this.onRezDateChange.bind(this)} date={this.state.startDate} label="Tarih"/>
                </div>
              </div>
              <div className="row odalar" >
                {rooms}
              </div>
              <div className="row musteriler">
                {customers}
              </div>
            </div>
            <GelecekRez />
          </div>
		)

	}
}
