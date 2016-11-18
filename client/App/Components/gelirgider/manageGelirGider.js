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
			ggDate : moment().format('YYYY-MM-DD'),
			topGelir : 0,
			topGider : 0
		}
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
		})
	}

	render() {



		return (
          <div className="container">
            <div className="row">
              <div className="=form-group rezDate">
                <RezDate onDateChange={this.onRezDateChange.bind(this)} date={this.state.ggDate}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9">
                <ShowGelirGider ggDate={this.state.ggDate} />
                <NewGelirGider />
              </div>
              <div className="col-md-3">
                <CalculateGelirGider ggDate={this.state.ggDate} />
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