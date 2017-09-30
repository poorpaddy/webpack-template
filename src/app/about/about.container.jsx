import React, {Component} from 'react';
import Helmet from 'react-helmet';
import config from 'config';

export default class AboutPage extends Component {
  render() {
    return (
        <div>
          <Helmet {...config.app.head}/>
          <p>Welcome to the about page</p>
          <div className="div-for-testing"><p>Targeting this div to see if tests work</p></div>
        </div>
    )
  }
}