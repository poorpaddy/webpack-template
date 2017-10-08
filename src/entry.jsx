import React from 'react';
import {StaticRouter} from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';

const routes = require('routes');

const Html = props =>
  <html>
    <body>
      <div id="root">
        {props.children}
      </div>
      <script src="/bundle.js"></script>
    </body>
  </html>;

export default locals =>
  ReactDOMServer.renderToString(
    <StaticRouter location={locals.path} context={{}}>
      <Html>
        {routes}
      </Html>
    </StaticRouter>
  );

if (typeof document !== 'undefined') {
  require('app');
}
