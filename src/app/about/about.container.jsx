import React, { Component } from 'react';
import SEO from '../seo/seo.conponent';

export default class AboutPage extends Component {
  render () {
    return (
      <div>
        <SEO url={this.props.location.pathname}/>
        <p>Welcome to the about page</p>
        <div className="div-for-testing"><p>Targeting this div to see if tests work</p></div>
      </div>
    );
  }
}
