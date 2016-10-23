import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Rooms = new Mongo.Collection("rooms");
export const Reservations = new Mongo.Collection("reservations");


if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('getRooms', function roomPublication() {
     return Rooms.find({});
   });

   Meteor.publish('getReservations', function reservationPublication() {
      return Reservations.find({});
    });


}

Meteor.methods({
  newReservation: function (reservation) {
      var reservationId = Reservations.insert(reservation);
      return reservationId;
  },

  deleteReservation: function (reservationId) {
      Reservations.remove(reservationId);
  },

  updateNote: function (reservation) {
      Reservations.update(reservation.noteId, {
          $set: {title: reservation.title, content: reservation.content}
      });
  }
});
