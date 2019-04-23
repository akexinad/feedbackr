const requireLogin = require('../requireLogin.js');
const requireCredits = require('../requireCredits.js');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {

  });
};
