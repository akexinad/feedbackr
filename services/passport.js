const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')

const { googleClientID, googleClientSecret } = require('../config/keys.js')

const User = mongoose.model('users')

passport.use(
  new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: '/auth/google/callback',
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
    .then( (existingUser) => {
      if (existingUser) {
        return user
      }

      new User({
        googleId: profile.id
      }).save()
    })
  })
)
