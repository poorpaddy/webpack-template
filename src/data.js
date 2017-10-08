const _ = require('lodash');

const meta = [
  {
    url: '/',
    title: 'Webpack | Template',
    description: 'Productivity application built using the awesome React',
    keywords: 'productivity application'
  },
  {
    url: '/about',
    title: 'About - Webpack | Template',
    description: 'General information about this productivity application, How to install and use it.',
    keywords: 'about, general information'
  },
  {
    url: '/faq',
    title: 'FAQ - Webpack | Template',
    description: 'Want to get in touch with us? Enter the form below.',
    keywords: 'faq, get in touch'
  }
];

module.exports = {
  routes: _.map(meta, 'url'),
  meta: meta
};
