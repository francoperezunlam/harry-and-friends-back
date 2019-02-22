const translate = require('google-translate-api');

exports.translateText = (text, options) => translate(text, { ...options });
