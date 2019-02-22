const express = require('express'),
      router = express.Router(),
      translate = require('google-translate-api'),
      translationsService = require('../services/translations');

router.get('/', function(req, res, next) {
  return translationsService.translateText(req.query.text || 'I speak english', { 
    from: req.query.textLanguage, to: req.query.translationLanguage  
  }).then(translation => {
    res.status(200);
    res.send(translation);
  }).catch(err => {
      next(err);
  });
});

module.exports = router;
