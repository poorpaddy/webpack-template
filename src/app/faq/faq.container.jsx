import React, {Component} from 'react';
import Helmet from 'react-helmet';
import config from 'config';

export default class FAQPage extends Component {
  render() {
    return (
        <div>
          <Helmet {...config.app.head}/>
          You are on the FAQ page.
        </div>
    )
  }
}