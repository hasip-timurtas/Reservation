import React from 'react';

import Home from './Components/home';

Notes = new Meteor.Collection("notes");
Meteor.subscribe("getNotes");

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row">
              <Home />
            </div>
        )
    }

}
