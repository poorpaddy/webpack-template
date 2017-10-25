import React, { Component } from 'react';
import './scss/header.scss';
import TwitterLogo from './img/twitter-logo-button.svg';

export default class Header extends Component {
  render () {
    return (
      <header className="row masthead">
        <p className="mytext">This should be blue if css is included</p>
        <img src={TwitterLogo} width="256" height="256" />
        <div className="bg-image"></div>
      </header>
    );
  }
}
