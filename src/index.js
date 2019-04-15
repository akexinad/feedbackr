const express = require('express')
const mongoose = require('mongoose')
const cookeSession = require('cookie-session')
const passport = require('passport')

require('../models/User.js')
const authRoutes = require('../routes/authRoutes.js')
require('../services/passport.js')
const { mongoURI, cookieKey } = require('../config/keys.js')

mongoose.connect('mongodb://127.0.0.1:27017/feedbackr-api', {
  useNewUrlParser: true,
  useCreateIndex: true, // Indexes the data in mongodb, allowing for quicker access.
  useFindAndModify: false
})

const PORT = process.env.PORT
const app = express()

app.use(
  cookeSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)

app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${ PORT }`)
})
