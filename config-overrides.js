/* config-overrides.js */
const path = require('path')
const {
  override,
  addDecoratorsLegacy,
  addWebpackAlias
} = require('customize-cra')
const rewireStyl = require('react-app-rewire-stylus-modules')

module.exports = override(
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  rewireStyl
)
