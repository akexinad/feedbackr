// The reason we use require instead of import is because import belongs to ES2015 and node does not support that YET
const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const { googleClientID, googleClientSecret } = require('../config/googleOAuth.js')

const PORT = process.env.PORT
const app = express()

passport.use(
  new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: '/auth/google/callback',
  }, (accessToken) => {
    console.log(accessToken);
  })
)

app.get(
  '/auth/google', passport.authenticate('google', {
    scope: [
      'profile',
      'email'
    ]
  })
)

app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${ PORT }`)
})
