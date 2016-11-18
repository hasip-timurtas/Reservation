import React from 'react'
import { Reservations } from '../../../../imports/api/rooms'
import RezDate from '../rezDate'

export default class ReservationModal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			res : this.props.res
		}

	}

	updateReservation(){
		console.log(this.props.res)
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

	componentWillMount(){
		console.log('didamount')
		this.setState({
			res : this.props.res
		})
	}

	render() {
		console.log(this.props.res)
		if (!this.props.res) {
			return null
		}

		return (
          <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                </div>
                <div className="modal-body">
                <form className="new-note" onSubmit={this.updateReservation.bind(this)}>
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
                                <input type="text" className="form-control" ref="isim" placeholder="İSİM" value={this.props.res.isim}  />
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="=form-group">
                            <div className="col-md-6">
                                <RezDate onDateChange={this.onRezDateChangeGiris.bind(this)} date={this.props.res.giris}/>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="=form-group">
                            <div className="col-md-6">
                                <RezDate onDateChange={this.onRezDateChangeCikis.bind(this)} date={this.props.res.cikis}/>
                            </div>
                        </div>
                    </div>
                    <br />



                    <div className="row">
                        <div className="=form-group">
                            <div className="col-md-6">
                                <input type="number" className="form-control" min="0" max="10000" step="1"
                                ref="ucret" placeholder="ÜCRET" value={this.props.res.ucret} />
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="=form-group">
                          <div className="col-md-6">
                             <select className="form-control" ref="kahvalti">
                               <option>Kahvaltı Var</option>
                               <option>Kahvaltı Yok</option>
                             </select>
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
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={this.updateReservation.bind(this)}>Save changes</button>
                </div>
              </div>
            </div>
          </div>
		)
	}
}
