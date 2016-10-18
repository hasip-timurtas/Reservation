import React from 'react';

import ShowRooms from './Components/showRooms';
import NewReservation from './Components/newReservation';



export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row">
              <ShowRooms />
              <NewReservation />
            </div>
        )
    }

}
