require('babel-polyfill');

const environment = {
  development: {
    api: 'http://127.0.0.1:8000/api'
  },
  qa: {
    api: 'http://127.0.0.1:8000/api'
  },
  production: {
    api: 'http://127.0.0.1:8000/api'
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  app: {
    head: {
      title: 'Webpack | Template',
      meta: [{
        name: 'description',
        content: 'A simple template project.'
      },
      {
        title: 'Webpack | Template'
      },
      // <!-- Social: Facebook / Open Graph -->
      {
        property: 'og:title',
        content: 'Webpack React Template'
      },
      {
        property: 'og:site_name',
        content: 'Webpack React Template'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://template.com/'
      },
      {
        property: 'og:description',
        content: 'This is webpack React Template project.'
      },
      {
        property: 'og:locale',
        content: 'en_US'
      },
      {
        property: 'og:image',
        content: 'background.jpg'
      }
      ]
    }
  }
}, environment);
