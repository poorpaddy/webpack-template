import React from 'react';
import {StaticRouter} from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import _ from 'lodash';

const data = require('./data');
const routes = require('routes');

const Html = (props) => {
  // let's find the name of the url for which the html file is being generated
  // we will use that to find its meta details.
  let url = props.path;
  let content = _.find(data.meta, { url: url });
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{ content.title }</title>
        <meta name="description" content={ content.description } data-react-helmet="true" />
        <meta name="keywords" content={ content.keywords } data-react-helmet="true" />
      </head>
      <body>
        <div id="root">
          {props.children}
        </div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  );
};

export default locals =>
  ReactDOMServer.renderToString(
    <StaticRouter location={locals.path} context={{}}>
      <Html {...locals}>
        {routes}
      </Html>
    </StaticRouter>
  );

if (typeof document !== 'undefined') {
  require('app');
}
