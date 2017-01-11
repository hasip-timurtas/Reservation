import React from 'react'
import { GelirGider } from '../../../../imports/api/rooms'
import moment from 'moment'

export default class CalculateGelirGider extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			topGelir : 0,
			topGider : 0
		}
	}

	calculateGelir(){

		var total = 0
		var date ={
			$gte: moment(this.props.fisrtDate).toDate(),
			$lt: moment(this.props.secondDate).add(1,'day').toDate()
		}

		GelirGider.find({ tarih: date, tipi:'Gelir'}).map(function(doc) {
			total += parseFloat(doc.ucret)
		})

		return total
	}

	calculateGider(){
		var total = 0
		var date ={
			$gte: moment(this.props.fisrtDate).toDate(),
			$lt: moment(this.props.secondDate).add(1,'day').toDate()
		}

		GelirGider.find({tarih: date , tipi:'Gider'}).map(function(doc) {
			total += parseFloat(doc.ucret)
		})

		return total
	}

	render() {
		var gelir = this.calculateGelir()
		var gider = this.calculateGider()
		var top = gelir-gider
		return (
          <div>
            <h3>Gelir : {gelir} TL</h3>
            <h3>Gider : {gider} TL</h3>
            <h3 className="color-blue">Net : {top} TL</h3>
          </div>
		)
	}
}
