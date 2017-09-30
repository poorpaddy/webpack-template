import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import config from 'config';
import HomePage from "./home/home.container";
import FAQPage from "./faq/faq.container";
import AboutPage from "./about/about.container";

export default class MainContainer extends Component {
  render() {
    return (
        <div>
          <Helmet {...config.app.head}/>
          <div id="container">
            <div>
              <Route exact path="/" component={HomePage} />
              <Route path="/faq" component={FAQPage} />
              <Route path="/about" component={AboutPage} />
            </div>
          </div>
        </div>
    )
  }
}