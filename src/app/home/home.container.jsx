import React, { Component } from 'react';
import SEO from '../seo/seo.conponent';

export default class HomePage extends Component {
  render () {
    return (
      <div>
        <SEO url={this.props.location.pathname}/>
        Home
      </div>
    );
  }
}
