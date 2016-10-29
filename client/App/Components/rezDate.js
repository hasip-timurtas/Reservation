import React from 'react';

export default class RezDate extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        startDate : this.props.date
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
