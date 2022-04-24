const userSchemas = require('./userSchemas')
const repositorySchemas = require('./repositorySchemas')
const loginHistorySchemas = require('./loginHistorySchemas')
const authSchemas = require('./authSchemas')
const errorSchemas = require('./errorSchemas')

module.exports = {
  schemas: {
    ...userSchemas,
    ...repositorySchemas,
    ...loginHistorySchemas,
    ...authSchemas,
    ...errorSchemas
  }
}