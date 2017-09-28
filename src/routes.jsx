import React from 'react';
import { IndexRoute, Route } from 'react-router-dom';
import Index from "./app/index.container";
import {HomePage} from "./app/home/home.container";

export default () => (
    <Route>
      <Index>
        <Route path="/" component={HomePage}></Route>
      </Index>
    </Route>
)