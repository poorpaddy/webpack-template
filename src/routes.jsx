import React from 'react';
import { IndexRoute, Route } from 'react-router-dom';
import MainContainer from "./app/main.container";
import Header from "./app/header/header.component";
import Footer from "./app/footer/footer.component";

export default () => (
    <div>
      <Header />
      <MainContainer/>
      <Footer/>
    </div>
)