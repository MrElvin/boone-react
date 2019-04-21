/* config-overrides.js */
const rewireStyl = require('react-app-rewire-stylus-modules')
module.exports = function override (config, env) {
  // do stuff with the webpack config...
  config = rewireStyl(config, env)
  return config
}
