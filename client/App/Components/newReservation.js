import  React, {Component} from 'react';
import {getCurrentDate} from './currentDate';
import RezDate from './rezDate';
import { Rooms, Reservations } from '../../../imports/api/rooms';

export  default class NewReservation extends Component {
  constructor(props) {
      super(props);

      this.state = {
        giris : getCurrentDate(),
        cikis : getCurrentDate()
      };
  }

    addNote(event) {
        event.preventDefault();
        var reservation = {
           isim : this.refs.isim.value,
           oda : this.refs.oda.value,
           giris : this.state.giris,
           cikis : this.state.cikis,
           ucret : this.refs.ucret.value.trim(),
           status : 'A',
           odemeBilgisi : 'Hayır',
           kahvalti : this.refs.kahvalti.value
        };

        Meteor.call("newReservation", reservation);

        console.log(reservation);

        this.refs.oda.value="";
        this.refs.ucret.value ="";
    }

    onRezDateChangeGiris(date){

      this.setState({
        giris : date
      });

    }

    onRezDateChangeCikis(date){

      this.setState({
        cikis : date
      });

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
                           <option >306</option>
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
                            <RezDate onDateChange={this.onRezDateChangeGiris.bind(this)} date={this.state.giris}/>
                        </div>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="=form-group">
                        <div className="col-md-6">
                            <RezDate onDateChange={this.onRezDateChangeCikis.bind(this)} date={this.state.cikis}/>
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
        )

    }
}
