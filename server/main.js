import {Meteor} from 'meteor/meteor';
Reservations = new Meteor.Collection("reservations");
Meteor.startup(() => {
    // code to run on server at startup
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
    }
});
