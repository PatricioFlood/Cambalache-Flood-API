const schemas = require('./schemas')
const responses = require('./responses')
const securitySchemes = require('./securitySchemes')

module.exports = {
  components: {
    ...schemas,
    ...responses,
    ...securitySchemes
  }
}