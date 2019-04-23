const keys = require('../config/keys.js');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin.js');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const creditCardCharge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'USD 5 for for 5 credits.',
      source: req.body.id
    });

    // NOTE: Remember that you will always have access to the User model in req via the passport and sessions middlewares.
    // See workshop/express_js_flow
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
