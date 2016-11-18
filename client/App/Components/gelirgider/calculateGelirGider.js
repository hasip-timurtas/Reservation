import React from 'react'
import { GelirGider } from '../../../../imports/api/rooms'

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

		GelirGider.find({tarih:this.props.ggDate, tipi:'gelir'}).map(function(doc) {
			total += parseFloat(doc.ucret)
		})

		return total
	}

	calculateGider(){
		var total = 0

		GelirGider.find({tarih:this.props.ggDate, tipi:'gider'}).map(function(doc) {
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
