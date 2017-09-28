import React, {Component} from 'react';

export default class Index extends Component {
  render() {
    return (
        <div id="index">
          <div id="container">
            <div id="header"></div>
            <div className="children">
              {this.props.children}
            </div>
            <div id="footer"></div>
          </div>
        </div>
    )
  }
}