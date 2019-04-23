const mongoose = require('mongoose');
const requireLogin = require('../requireLogin.js');
const requireCredits = require('../requireCredits.js');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
    })
  });
};
