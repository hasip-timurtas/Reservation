Meteor.publish("getReservations",function() {
    return Reservations.find();
});

Meteor.publish("getRooms",function() {
    return Rooms.find();
});
