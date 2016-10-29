import React from 'react';
import { GelirGider } from '../../../imports/api/rooms';
import SingleGelirGider from './singleGelirGider';

export default class ShowGelirGider extends React.Component {

    allGelirGider(){
      return GelirGider.find({tarih:this.props.ggDate});
    }

    render() {

      var gelirgiders = this.allGelirGider().map(sgg => {
         return <SingleGelirGider sgg={sgg} key={sgg._id} />;
      });

        return (
          <table className="table table-bordered gelirgider-table">
            <thead>
              <tr>
                <th>Açıklama</th>
                <th>Ücret</th>
                <th>Tipi</th>
              </tr>
            </thead>
            <tbody>
              {gelirgiders}
            </tbody>
          </table>
        )
    }
}
