Meteor.publish("getNotes",function() {
    return Reservations.find({owner_id: this.userId});
});
