import React from 'react';

export default class SingleGelRez extends React.Component {

    onHanleClick(){
      this.props.onResClick(this.props.res);
    }

    render() {
        return (
              <a href="#" className="list-group-item recent-note" data-toggle="modal" data-target="#myModal" onClick={this.onHanleClick.bind(this)}>
                {this.props.res.isim} - <strong> {this.props.res.giris}</strong>
              </a>
        )
    }
}
