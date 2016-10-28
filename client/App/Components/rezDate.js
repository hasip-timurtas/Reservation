import React from 'react';
import {getCurrentDate} from './currentDate';

export default class RezDate extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        startDate : getCurrentDate()
      }
  }


    onDateChange(event) {
        this.props.onDateChange(event.target.value);
    }

    render() {
        return (
            <div>

               <div className="row">
                   <div className="=form-group">
                       <div className="col-md-6">
                           <input type="date" className="form-control" placeholder="TARİH" value={this.state.startDate} onChange={this.onDateChange.bind(this)}/>
                       </div>
                   </div>
               </div>


            </div>


        )
    }
}
