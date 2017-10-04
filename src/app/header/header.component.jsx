import React, { Component } from 'react';

export default class Header extends Component {
  render () {
    return (
      <div id="header">
        <a href="/">home</a><br />
        <a href="/faq">faq</a><br />
        <a href="/about">about</a><br /><br />
      </div>
    );
  }
}
