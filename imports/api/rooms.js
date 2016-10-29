import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Rooms = new Mongo.Collection("rooms");
export const Reservations = new Mongo.Collection("reservations");
export const GelirGider = new Mongo.Collection("gelirgider");


if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('getRooms', function roomPublication() {
    if(this.userId ==null) return;
    var user = Meteor.users.findOne({_id:this.userId});
    var email = user.services.google.email;
    if(email == "hasip.timurtas@gmail.com" || email=="sirinucak@gmail.com"){
       return Rooms.find({});
    }

    return null;
   });

   Meteor.publish('getReservations', function reservationPublication() {
     if(this.userId ==null) return;
     var user = Meteor.users.findOne({_id:this.userId});
     var email = user.services.google.email;

     if(email == "hasip.timurtas@gmail.com" || email=="sirinucak@gmail.com"){
        return Reservations.find({});
     }
     return null;
    });

    Meteor.publish('getGelirGider', function reservationPublication() {
      if(this.userId ==null) return;
      var user = Meteor.users.findOne({_id:this.userId});
      var email = user.services.google.email;

      if(email == "hasip.timurtas@gmail.com" || email=="sirinucak@gmail.com"){
         return GelirGider.find({});
      }
      return null;
     });

}

Meteor.methods({
  // Reservations
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
  },
  // GelirGider
  newGelirGider: function (gelirGider) {
      var ggId = GelirGider.insert(gelirGider);
      return ggId;
  },

  deleteGelirGider: function (gelirGiderId) {
      GelirGider.remove(gelirGiderId);
  },

  updateNote: function (gelirGider) {
      GelirGider.update(gelirGider.noteId, {
          $set: {title: gelirGider.title, content: gelirGider.content}
      });
  }
});
