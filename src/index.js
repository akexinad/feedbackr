const express = require('express')
const mongoose = require('mongoose')
const cookeSession = require('cookie-session')
const passport = require('passport')

require('../models/User.js')
require('../services/passport.js')
const authRoutes = require('../routes/authRoutes.js')
const { MONGODB_URL, MONGODB_ATLAS_URI, cookieKey } = require('../config/keys.js')

mongoose.connect((MONGODB_ATLAS_URI), {
  useNewUrlParser: true,
  // useCreateIndex: true, // Indexes the data in mongodb, allowing for quicker access.
  // useFindAndModify: false
})

const PORT = 3001
const app = express()

// CONNECTING MIDDLEWARES
app.use(
  cookeSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [ cookieKey ]
  })
)
app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)

app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${ PORT }`)
})
