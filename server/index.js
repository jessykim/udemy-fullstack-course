import express from 'express'
import passport from 'passport'
const GoogleStrategy = require('passport-google-oauth20').Strategy

const app = express()

passport.use(new GoogleStrategy())

const PORT = process.env.PORT || 5050
app.listen(PORT)