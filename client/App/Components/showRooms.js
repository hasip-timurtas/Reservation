import React from 'react';

import SingleRoom from './singleRoom';

export default class ShowRooms extends React.Component {
    constructor(props) {
        super(props);
    }

    loadData(){
        console.log(Rooms.find({}).fetch());
    }


    render() {

      /*  var rooms = this.loadData().map(room => {
          console.log(room); //  return <SingleRoom roomum={room} key={room._id} />;
        });*/
        this.loadData();

        return (<div>
          <h1> ODALAR</h1>

          <div className="row odalar" >



            <div> <h2>301</h2></div>
            <div> <h2>302</h2>
              <i className="fa fa-female fa-2x" aria-hidden="true"></i>
              <i className="fa fa-male fa-2x" aria-hidden="true"></i>
            </div>
            <div> <h2>303</h2></div>
            <div> <h2>304</h2></div>
            <div> <h2>305</h2></div>
            <div> <h2>306</h2></div>
            <div> <h2>307</h2></div>
          </div>

        </div>)

    }
}
