const basicInfo = require('./basicInfo')
const components = require('./components')
const endpoints = require('./endpoints')

module.exports = {
  ...basicInfo,
  ...components,
  ...endpoints
}