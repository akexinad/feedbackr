const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url');
const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin.js');
const requireCredits = require('../middlewares/requireCredits.js');
const Mailer = require('../services/Mailer.js');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate.js');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!');
  })
  
  app.post('/api/surveys/webhooks', (req, res) => {
    // We need to do some data cleaning to ensure we filter only the events that are 'click' events and that they are UNIQUE, one event per user.
    const events = _.chain(req.body)
      .map( (event) => {

        const pathName = new URL(event.url).pathname;
        
        // We need to extract the survey id and the user's choice.
        const path = new Path('/api/surveys/:surveyId/:choice');
        const match = path.test(pathName);

        if (match) {
          return {
            email: event.email,
            surveyId: match.surveyId,
            choice: match.choice
          };
        }
      })
      // remove undefined values
      .compact()
      // return unique values
      .uniqBy('email', 'surveyId')
      .value();

    console.log(events);
    
    res.send({});
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
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

    // Great place to send an email!
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();

      req.user.credits -= 1;

      const user = await req.user.save();

      res.send(user);
    } catch (error) {
      res.status(422).send(error);
    }
  });

};
