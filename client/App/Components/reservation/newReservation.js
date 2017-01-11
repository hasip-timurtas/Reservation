import  React, {Component} from 'react'
import RezDate from '../rezDate'
import { Rooms, Reservations } from '../../../../imports/api/rooms'
import moment from 'moment'

export  default class NewReservation extends Component {
	constructor(props) {
		super(props)

		this.state = {
			giris : moment().format('YYYY-MM-DD'),
			cikis : moment().add(1,'day').format('YYYY-MM-DD')
		}
	}

	addNote(event) {
		event.preventDefault()
		var cikis = null
		if (this.refs.acik.checked) {
			cikis = 'Açık'
		}else {
			cikis = this.state.cikis
		}

		var reservation = {
			isim : this.refs.isim.value,
			oda : this.refs.oda.value,
			giris : this.state.giris,
			cikis : cikis,
			ucret : this.refs.ucret.value.trim(),
			status : 'A',
			odemeBilgisi : 'Hayır',
			kahvalti : this.refs.kahvalti.value
		}

		Meteor.call('newReservation', reservation)

		console.log(reservation)

		this.refs.oda.value=''
		this.refs.ucret.value =''
	}

	onRezDateChangeGiris(date){

		this.setState({
			giris : date
		})

	}

	onRezDateChangeCikis(date){

		this.setState({
			cikis : date
		})

	}

	render() {
		return (
            <form className="new-note" onSubmit={this.addNote.bind(this)}>
                <div className="row">
                    <div className="=form-group">
                      <div className="col-md-6">
                         <select className="form-control" ref="oda">
                           <option>301</option>
                           <option>302</option>
                           <option>303</option>
                           <option>304</option>
                           <option>305</option>
                           <option>306</option>
                           <option>307</option>
                         </select>
                        </div>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="=form-group">
                        <div className="col-md-6">
                            <input type="text" className="form-control" ref="isim" placeholder="İSİM"  />
                        </div>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="=form-group">
                        <div className="col-md-6">
                            <input type="number" className="form-control" min="0" max="10000" step="1" ref="ucret" placeholder="ÜCRET"  />
                        </div>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="=form-group">
                      <div className="col-md-6">
                         <select className="form-control" ref="kahvalti">
												 	<option>Kahvaltı Yok</option>
												 	<option>Kahvaltı Var</option>
                         </select>
                        </div>
                    </div>
                </div>
                <br />

								<div className="row">
										<div className="=form-group">
												<div className="col-md-6">
														<RezDate onDateChange={this.onRezDateChangeGiris.bind(this)} label="Giriş" date={this.state.giris}/>
												</div>
										</div>
								</div>
								<br />

								<div className="row">
										<div className="=form-group">
												<div className="col-md-6">
														<RezDate onDateChange={this.onRezDateChangeCikis.bind(this)} label="Çıkış" date={this.state.cikis}/>
												</div>
												<div className="col-md-1">	<input type="checkbox" ref="acik" />Açık </div>
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
