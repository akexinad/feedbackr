const requireLogin = require('../requireLogin.js');

module.exports = app => {
  app.post('/api/surveys', requireLogin, (req, res) => {
    
  });
};
