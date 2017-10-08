import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from 'stores/configureStore';
import { loadState } from 'stores/localstorage';
import { BrowserRouter as Router, hashHistory } from 'react-router-dom';

export const store = configureStore(loadState());

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
