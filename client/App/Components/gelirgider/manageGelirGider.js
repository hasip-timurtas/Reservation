import React from 'react'
import { GelirGider } from '../../../../imports/api/rooms'
import NewGelirGider from './newGelirGider'
import RezDate from '../rezDate'
import ShowGelirGider from './showGelirGider'
import CalculateGelirGider from './calculateGelirGider'
import moment from 'moment'

import { createContainer } from 'meteor/react-meteor-data'

export class ManageGelirGider extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			firstDate : moment().format('YYYY-MM-DD'),
			secondDate : moment().format('YYYY-MM-DD'),
			topGelir : 0,
			topGider : 0
		}
	}


	firstDateChange(date){
		this.setState({
			firstDate : date
		})
	}

	secondDateChange(date){
		this.setState({
			secondDate : date
		})
	}

	render() {
		return (
          <div className="container">
            <div className="row">
              <div className="col-md-9">
								<div className="row">
									<div className="col-md-6">
										<RezDate onDateChange={this.firstDateChange.bind(this)} label="Başlan" EnablefirstDay={true} date={this.state.firstDate}/>
									</div>
									<div className="col-md-6">
										<RezDate onDateChange={this.secondDateChange.bind(this)} label="Bitiş" date={this.state.secondDate}/>
									</div>
		            </div>
                <ShowGelirGider fisrtDate={this.state.firstDate} secondDate={this.state.secondDate}  />
                <NewGelirGider />
              </div>
              <div className="col-md-3">
                <CalculateGelirGider fisrtDate={this.state.firstDate} secondDate={this.state.secondDate} />
              </div>
            </div>
          </div>
		)
	}
}

export default createContainer(() => {

	Meteor.subscribe('getGelirGider')

	return {
		gelirGiders: GelirGider.find({}).fetch()
	}
}, ManageGelirGider)
