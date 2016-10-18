import {Meteor} from 'meteor/meteor';
Reservations = new Meteor.Collection("reservations");
Rooms = new Meteor.Collection("rooms");
Meteor.startup(() => {
    // code to run on server at startup
  if (Rooms.find({}).count() < 1){  // Odalar yoksa kayıt yap.
    Rooms.insert({Name : '301',Full:'N'});
    Rooms.insert({Name : '302',Full:'N'});
    Rooms.insert({Name : '303',Full:'N'});
    Rooms.insert({Name : '304',Full:'N'});
    Rooms.insert({Name : '305',Full:'N'});
    Rooms.insert({Name : '306',Full:'N'});
    Rooms.insert({Name : '307',Full:'N'});
  }

});

Meteor.methods({
    newReservation: function (reservation) {
        if (!Meteor.userId()) {
            throw new Meteor.error("unauthorized", "unauthorized");
        };

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

    newRoom: function (roomName) {
      console.log("newRoom Method");
      roomId = Rooms.insert({Name : roomName});

      return roomId;
    }


});
