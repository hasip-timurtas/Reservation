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

      this.setState({
        startDate : event.target.value
      });

        this.props.onDateChange(event.target.value);
    }

    render() {
        return (
            <div>
              <input type="date" className="form-control" placeholder="TARİH" value={this.state.startDate} onChange={this.onDateChange.bind(this)}/>
            </div>


        )
    }
}
