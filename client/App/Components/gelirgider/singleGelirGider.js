import React from 'react'

export default class SingleGelirGider extends React.Component {

	render() {
		return (
          <tr>
            <td>{this.props.sgg.aciklama}</td>
            <td>{this.props.sgg.ucret} TL </td>
            <td>{this.props.sgg.tipi}</td>
          </tr>
		)
	}
}
