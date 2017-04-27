'use strict';
const EmailSender = require('../../../EmailSender.js');
module.exports = function (app) {
  // Root routing
  var core = require('../controllers/core.server.controller');

  // Define error pages
  app.route('/server-error').get(core.renderServerError);

  // Return a 404 for all undefined api, module or lib routes
  app.route('/:url(api|modules|lib)/*').get(core.renderNotFound);

  // Define application route
  app.route('/*').get(core.renderIndex);

  app.post('/send-email', function(req, res){
    console.log('Hello, world!');
    EmailSender.sendEmail('austindaly7cf@gmail.com', 'Test', 'The quick brown fox jumps over the lazy dog. 0123456789');
    res.redirect('/');
  });
};
