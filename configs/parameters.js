const pjson = require('../package.json');

module.exports = {
  lang: 'en',
  title: 'Box Shadow Generator',
  author: pjson.author.name || '',
  email: pjson.author.email || '',
  url: pjson.author.url || '',
  description: 'A box-shadow CSS generator that helps you quickly generate box-shadow CSS declarations for your website',
  version: pjson.version || '1.0.0',
  since: 2020,
  ogImage: '',
  themeColor: '#000000',
};
