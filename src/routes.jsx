import React from 'react';
import { IndexRoute, Route } from 'react-router-dom';
import Index from "./app/index.container";
import {HomePage} from "./app/home/home.container";
import {FAQPage} from "./app/faq/faq.container";
import {AboutPage} from "./app/about/about.container";

export default () => (
    <Route>
      <Index>
        <Route path="/" component={HomePage}></Route>
        <Route path="/faq" component={FAQPage}></Route>
        <Route path="/about" component={AboutPage}></Route>
      </Index>
    </Route>
)