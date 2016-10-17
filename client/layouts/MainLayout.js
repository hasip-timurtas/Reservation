import React from 'react';
import Nav from '../App/Nav';


Reservations = new Meteor.Collection("reservations");
Meteor.subscribe("getReservations");


export const MainLayout = ({content}) => (
    <div className="main-layout">
        <Nav />

        <div className="container">
            {content}
        </div>
    </div>
)
