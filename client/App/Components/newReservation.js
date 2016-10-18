import  React, {Component} from 'react';

export  default class NewReservation extends Component {
    addNote(event) {
        event.preventDefault();
        var reservation ={
           oda : this.refs.oda.value,
           giris : this.refs.giris.value,
           cikis : this.refs.cikis.value,
           ucret : this.refs.ucret.value.trim()
        };

        Meteor.call("newReservation", reservation);

        console.log(reservation);

        this.refs.oda.value="";
        this.refs.ucret.value ="";
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
                            <input type="date" className="form-control" placeholder="GİRİŞ TARİHİ"  ref="giris"/>
                        </div>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="=form-group">
                        <div className="col-md-6">
                            <input type="date" className="form-control" placeholder="ÇIKIŞ TARİHİ" ref="cikis"/>
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
                            <button type="submit" className="btn btn-default add-post">KAYDET</button>
                        </div>
                    </div>
                </div>
            </form>
        )

    }
}
