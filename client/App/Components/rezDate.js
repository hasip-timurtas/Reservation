import React from 'react'
import moment from 'moment'

export default class RezDate extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			startDate : this.props.date
		}
	}


	onDateChange(event) {

		this.setState({
			startDate : event.target.value
		})

		this.props.onDateChange(event.target.value)
	}

	makeFistDateToFirstDay(){
		var date = null
		if (this.refs.firstDay.checked) {
			date= moment().add(-1, 'months').endOf('month').add(1,'day').format('YYYY-MM-DD')
		}else {
			date= moment().format('YYYY-MM-DD')
		}

		this.setState({ startDate : date })
		this.props.onDateChange(date)
	}

	render() {
		return (
            <div className="row">
							{this.props.EnablefirstDay ? (<div className="col-md-3"> <input type="checkbox" ref="firstDay" onChange={this.makeFistDateToFirstDay.bind(this)} /> Ay Başı </div>) : null}
              <div className="col-md-9"> <input type="date" className="form-control" placeholder={this.props.label} value={this.state.startDate} onChange={this.onDateChange.bind(this)}/> </div>
            </div>
		)
	}
}
