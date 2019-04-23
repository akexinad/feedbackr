const express = require('express');
const mongoose = require('mongoose');
const cookeSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./models/User.js');
require('./services/passport.js');
const authRoutes = require('./routes/authRoutes.js');
const billingRoutes = require('./routes/billingRoutes.js');
const { mongodbUri, mongodbAtlasUri, cookieKey } = require('./config/keys.js');

mongoose.connect((mongodbAtlasUri), {
  useNewUrlParser: true,
  useCreateIndex: true, // Indexes the data in mongodb, allowing for quicker access.
  useFindAndModify: false
})

const PORT = process.env.PORT || 3001
const app = express()

// CONNECTING MIDDLEWARES //////////////////////
app.use(bodyParser.json());
app.use(
  cookeSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [ cookieKey ]
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);

if (process.env.NODE_ENV) {
  // Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static('client/build'));

  //Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${ PORT }`)
})
