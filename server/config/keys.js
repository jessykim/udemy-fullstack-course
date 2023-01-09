// keys.js - figure out what set of credentials to return

// import * as developmentKeys from './dev.js'
// import * as productionKeys from './prod.js'

// let selectedKeys

// if (process.env.RAILWAY_ENVIRONMENT === 'production') {
//   selectedKeys = productionKeys
// } else {
//   selectedKeys = developmentKeys
// }

// export default selectedKeys

if (process.env.NODE_ENV === 'production') {
  // we are in the production - return the prod set of keys
  module.exports = require('./prod')
} else {
  // we are in development - return the dev keys!
  module.exports = require('./dev')
}