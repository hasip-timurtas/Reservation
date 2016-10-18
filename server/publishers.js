Meteor.publish("getNotes",function() {
    return Reservations.find({owner_id: this.userId});
});

Meteor.publish("getRooms",function() {
    return Rooms.find({});
});
