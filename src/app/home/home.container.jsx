import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from 'config';

export default class HomePage extends Component {
  render () {
    return (
      <div>
        <Helmet {...config.app.head} />
        Home
      </div>
    );
  }
}
