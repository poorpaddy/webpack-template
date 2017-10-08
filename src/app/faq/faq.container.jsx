import React, { Component } from 'react';
import SEO from '../seo/seo.conponent';

export default class FAQPage extends Component {
  render () {
    return (
      <div>
        <SEO url={this.props.location.pathname}/>
        You are on the FAQ page.
      </div>
    );
  }
}
