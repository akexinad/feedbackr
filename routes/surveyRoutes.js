const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin.js');
const requireCredits = require('../middlewares/requireCredits.js');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      // For recipients we need to transform an array of strings into an array of objects
      recipients: recipients.split(',').map( email => ({ email }) ),
      _user: req.user.id,
      dateSent: Date.now()
    });
  });
};
