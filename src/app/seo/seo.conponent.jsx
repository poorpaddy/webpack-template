import React, { Component } from 'react';
import Helmet from 'react-helmet';
import data from '../../data';
import _ from 'lodash';

export default class SEO extends Component {
  render () {
    const { meta } = data;
    let content = _.find(meta, { url: this.props.url });
    return (
      <Helmet>
        <title>{ content.title }</title>
        <meta name="description" content={ content.description } />
        <meta name="keywords" content={ content.keywords } />
      </Helmet>
    );
  }
}
