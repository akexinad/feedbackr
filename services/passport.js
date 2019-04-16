const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')

const { googleClientID, googleClientSecret } = require('../config/keys.js')

const User = mongoose.model('users')

// the argument 'user' is the user instance that goes through the authentication flow, not the capital U User model
// NOTE: user.id !== profile.id. user.id is generate by mongo
passport.serializeUser( (user, done) => {
  done(null, user.id)
})

passport.deserializeUser( (id, done) => {
  User.findById(id)
  .then( (user) => {
    done(null, user)
  })
})

passport.use(
  new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id })

    if (existingUser) {
      return done(null, existingUser)
    }

    const user = await new User({
      googleId: profile.id
    })
    .save()
    .done(null, user)
  })
)
