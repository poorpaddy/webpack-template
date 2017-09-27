import React from 'react';
import { Route } from 'react-router';
import {HomePage} from "./app/home.container";

export default () => (
    <Route>
      <Route path="/" component={HomePage}/>
    </Route>
)