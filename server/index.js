const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./models/Survey')
require('./services/passport');

const keys = require('./config/keys');

mongoose.connect(keys.mongoURI)

const app = express()

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets like our main.js file, or main.css file
  app.use(express.static('client/build'))

  // Express will serve up the index.html file if it doesn't recognize the route
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5050
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

// process.on('SIGINT', function() {
//   console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
//   // some other closing procedures go here
//   server.close(() => {
//     console.log('Http server closed.')
//     mongoose.connection.close(false, () => {
//       console.log('MongoDb connection closed.')
//       process.exit(0)
//     })
//   });
// })