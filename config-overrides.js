/* config-overrides.js */
const path = require('path')
const rewireStyl = require('react-app-rewire-stylus-modules')
const rewireAliases = require('react-app-rewire-aliases')
const { paths } = require('react-app-rewired')

module.exports = function override (config, env) {
  // do stuff with the webpack config...
  config = rewireStyl(config, env)
  config = rewireAliases.aliasesOptions({
    '@': path.resolve(__dirname, `${paths.appSrc}/`)
  })(config, env)
  return config
}
