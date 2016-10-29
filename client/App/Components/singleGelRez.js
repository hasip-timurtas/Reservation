import React from 'react';

export default class SingleGelRez extends React.Component {

    render() {
        return (
              <a href="#" className="list-group-item recent-note">{this.props.res.isim} - <strong> {this.props.res.giris}</strong></a>
        )
    }
}
