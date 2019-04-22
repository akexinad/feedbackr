const keys = require('../config/keys.js');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: 'You must log in!' });
    }

    const creditCardCharge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'USD 5 for for 5 credits.',
      source: req.body.id
    });

    // NOTE: Remember that you will always have access to the user model in request via the passport and sessions middlewares.
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
