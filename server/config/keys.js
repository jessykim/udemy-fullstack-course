// keys.js - figure out what set of credentials to return

import * as productionKeys from './prod.js'
import * as developmentKeys from './dev.js'

// const keys = {
//   'production': productionKeys,
//   'development': developmentKeys
// }

// console.log(keys['production'])

// console.log(process.env.RAILWAY_ENVIRONMENT, "RAILWAAAAAY")

let selectedKeys = ''

if (process.env.RAILWAY_ENVIRONMENT === 'production') {
  selectedKeys = productionKeys
} else {
  selectedKeys = developmentKeys
}

// console.log(selectedKeys, 'SELECTED KEEEYS')

// const selectedKeys = keys[process.env.RAILWAY_ENVIRONMENT]

export default selectedKeys

// if (process.env.NODE_ENV === 'production') {
//   // we are in the production - return the prod set of keys
//   module.exports = require('./prod')
// } else {
//   // we are in development - return the dev keys!
//   module.exports = require('./dev')
// }