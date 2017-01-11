import React from 'react'
import { GelirGider } from '../../../../imports/api/rooms'
import moment from 'moment'


const SingleGelirGider = ({ sgg }) =>{
	return(
		<tr>
			<td>{sgg.aciklama}</td>
			<td>{sgg.ucret} TL </td>
			<td>{sgg.tipi}</td>
			<td>{moment(sgg.tarih).format('DD.MM.YYYY')}</td>
		</tr>
	)}

export default class ShowGelirGider extends React.Component {

	allGelirGider(){
		var date ={
			$gte: moment(this.props.fisrtDate).toDate(),
			$lt: moment(this.props.secondDate).add(1,'day').toDate()
		}
		return GelirGider.find({tarih: date})
	}

	render() {

		var gelirgiders = this.allGelirGider().map(sgg => {
			return <SingleGelirGider sgg={sgg} key={sgg._id} />
		})

		return (
          <table className="table table-bordered gelirgider-table">
            <thead>
              <tr>
                <th>Açıklama</th>
                <th>Ücret</th>
                <th>Tipi</th>
								<th>Tarih </th>
              </tr>
            </thead>
            <tbody>
              {gelirgiders}
            </tbody>
          </table>
		)
	}
}
