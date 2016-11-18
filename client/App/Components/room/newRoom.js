import React, {Component} from 'react'

export default class newRoom extends Component {

	addRoom(event) {
		event.preventDefault()
		var room = {
			Name : this.refs.name.value,
			Full : 'N'
		}
		Meteor.call('newRoom', room)
		this.refs.name.value=''
	}

	render() {
		return (
            <form className="new-note" onSubmit={this.addRoom.bind(this)}>
                <div className="list-group">
                  <a href="#" className="list-group-item disabled"><strong>Yeni Oda Kayıt</strong> </a>
                </div>

                <div className="row">
                    <div className="=form-group">
                        <div className="col-md-6">
                            <input type="text" className="form-control" ref="name" placeholder="ODA ADI"  />
                        </div>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="=form-group">
                        <div className="col-md-6">
                            <button type="submit" className="btn btn-default add-post">KAYDET</button>
                        </div>
                    </div>
                </div>
            </form>
		)
	}
}
