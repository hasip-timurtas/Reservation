import  React, {Component} from 'react';
import {getCurrentDate} from './currentDate';
import RezDate from './rezDate';

export  default class NewGelirGider extends Component {
  constructor(props) {
      super(props);

      this.state = {
        tarih : getCurrentDate()
      };
  }

    addGelirGider(event) {
        event.preventDefault();
        var gelirGider = {
           aciklama : this.refs.aciklama.value,
           tipi : this.refs.tipi.value,
           tarih : this.state.tarih,
           ucret : this.refs.ucret.value.trim()
        };

        Meteor.call("newGelirGider", gelirGider);

        console.log(gelirGider);

        this.refs.aciklama.value="";
        this.refs.ucret.value ="";
    }

    onRezDateChangeTarih(date){

      this.setState({
        tarih : date
      });

    }

    render() {
        return (
            <form className="new-note" onSubmit={this.addGelirGider.bind(this)}>
            <div className="list-group">
              <a href="#" className="list-group-item disabled"><strong>Yeni Kayıt</strong> </a>
            </div>

            <div className="row">
                <div className="=form-group">
                  <div className="col-md-6">
                     <select className="form-control" ref="tipi">
                       <option>gelir</option>
                       <option>gider</option>
                     </select>
                    </div>
                </div>
            </div>
            <br />

                <div className="row">
                    <div className="=form-group">
                        <div className="col-md-6">
                            <input type="text" className="form-control" ref="aciklama" placeholder="AÇIKLAMA"  />
                        </div>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="=form-group">
                        <div className="col-md-6">
                            <RezDate onDateChange={this.onRezDateChangeTarih.bind(this)}/>
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
