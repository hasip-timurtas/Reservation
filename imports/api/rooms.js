import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

export const Rooms = new Mongo.Collection('rooms')
export const Reservations = new Mongo.Collection('reservations')
export const GelirGider = new Mongo.Collection('gelirgider')


GelirGider.Schema = new SimpleSchema({
	aciklama :{
		type : String
	},
	tipi:{
		type: String
	},
	tarih: {
		type: Date
	},
	ucret :{
		type: Number,
		decimal:true
	}
})

GelirGider.attachSchema(GelirGider.Schema)


if (Meteor.isServer) {
  // This code only runs on the server
	Meteor.publish('getRooms', function roomPublication() {
		if(this.userId ==null) return
		var user = Meteor.users.findOne({_id:this.userId})
		var email = user.services.google.email
		if(email == 'hasip.timurtas@gmail.com' || email=='sirinucak@gmail.com'){
			return Rooms.find({})
		}

		return null
	})

	Meteor.publish('getReservations', function reservationPublication() {
		if(this.userId ==null) return
		var user = Meteor.users.findOne({_id:this.userId})
		var email = user.services.google.email

		if(email == 'hasip.timurtas@gmail.com' || email=='sirinucak@gmail.com'){
			return Reservations.find({})
		}
		return null
	})

	Meteor.publish('getGelirGider', function reservationPublication() {
		if(this.userId ==null) return
		var user = Meteor.users.findOne({_id:this.userId})
		var email = user.services.google.email

		if(email == 'hasip.timurtas@gmail.com' || email=='sirinucak@gmail.com'){
			return GelirGider.find({})
		}
		return null
	})

}

Meteor.methods({
	// Rooms
	newRoom: function (room) {
		if (! this.userId) {
			throw new Meteor.Error('not-authorized')
		}
		var reservationId = Rooms.insert(room)
		return reservationId
	},

	deleteRoom: function (roomId) {
		if (! this.userId) {
			throw new Meteor.Error('not-authorized')
		}
		Rooms.remove(roomId)
	},

	updateRoom: function (room) {
		if (! this.userId) {
			throw new Meteor.Error('not-authorized')
		}
		Rooms.update(room._id, {
			$set: {title: room.title, content: room.content}
		})
	},

  // Reservations
	newReservation: function (reservation) {
		if (! this.userId) {
			throw new Meteor.Error('not-authorized')
		}
		var reservationId = Reservations.insert(reservation)
		return reservationId
	},

	deleteReservation: function (reservationId) {
		if (! this.userId) {
			throw new Meteor.Error('not-authorized')
		}
		Reservations.remove(reservationId)
	},

	updateReservation: function (reservation) {
		if (! this.userId) {
			throw new Meteor.Error('not-authorized')
		}
		Reservations.update(reservation.noteId, {
			$set: {title: reservation.title, content: reservation.content}
		})
	},
  // GelirGider
	newGelirGider: function (gelirGider) {
		if (! this.userId) {
			throw new Meteor.Error('not-authorized')
		}
		var ggId = GelirGider.insert(gelirGider)
		return ggId
	},

	deleteGelirGider: function (gelirGiderId) {
		if (! this.userId) {
			throw new Meteor.Error('not-authorized')
		}
		GelirGider.remove(gelirGiderId)
	},

	updateGelirGider: function (gelirGider) {
		if (! this.userId) {
			throw new Meteor.Error('not-authorized')
		}
		GelirGider.update(gelirGider.noteId, {
			$set: {title: gelirGider.title, content: gelirGider.content}
		})
	}
})
