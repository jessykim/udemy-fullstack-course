import express from 'express'
import mongoose from 'mongoose'
import cookieSession from 'cookie-session'
import passport from 'passport'

import './models/User.js'
import './services/passport.js'

import authRoutes from './routes/authRoutes.js'
import selectedKeys from './config/keys.js'

mongoose.connect(selectedKeys.mongoURI)

const app = express()

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [selectedKeys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)

const PORT = process.env.PORT || 5050
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})