import React, {Component} from 'react';
import Helmet from 'react-helmet';
import config from 'config';

export default class Index extends Component {
  render() {
    return (
        <div id="index">
          <Helmet {...config.app.head}/>
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