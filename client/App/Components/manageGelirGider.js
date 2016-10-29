import React from 'react';
import { GelirGider } from '../../../imports/api/rooms';
import SingleGelRez from './singleGelRez';
import NewGelirGider from './newGelirGider';
import {getCurrentDate} from './currentDate';
import RezDate from './rezDate';
import ShowGelirGider from './showGelirGider';
import { createContainer } from 'meteor/react-meteor-data';

export class ManageGelirGider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          ggDate : getCurrentDate(),
          topGelir : 0,
          topGider : 0
        };
    }

    componentDidMount(){
    /*  top gelir =
      var gelir =  GelirGider.find({tarih:this.state.ggDate});

      gelir.map(gel=>{

      })

      console.log(top);*/

      //GelirGider.find({tarih:this.state.ggDate});
    }




    onRezDateChange(date){
      this.setState({
        ggDate : date
      });
    }

    render() {



        return (
          <div className="container">
            <div className="row">
              <div className="=form-group rezDate">
                <RezDate onDateChange={this.onRezDateChange.bind(this)}/>
              </div>
            </div>
            
            <ShowGelirGider ggDate={this.state.ggDate} />
            <NewGelirGider />
          </div>

        )
    }
}

export default createContainer(() => {

  Meteor.subscribe('getGelirGider');

  return {
    gelirGiders: GelirGider.find({}).fetch()
  };
}, ManageGelirGider);
