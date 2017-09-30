import React from 'react';
import { IndexRoute, Route } from 'react-router-dom';
import Header from "./app/header/header.component";
import Footer from "./app/footer/footer.component";
import HomePage from "./app/home/home.container";
import FAQPage from "./app/faq/faq.container";
import AboutPage from "./app/about/about.container";

export default () => (
    <div>
      <Header />
      <div id="container">
        <Route exact path="/" component={HomePage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/about" component={AboutPage} />
      </div>
      <Footer/>
    </div>
)