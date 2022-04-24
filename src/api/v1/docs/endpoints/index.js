const userEndpoints = require('./userEndpoints')
const repositoryEndpoints = require('./repositoryEndpoints')
const loginHistoryEndpoints = require('./loginHistoryEndpoints')
const authEndpoints = require('./authEndpoints')

module.exports = {
  paths:{
    ...authEndpoints,
    ...userEndpoints,
    ...repositoryEndpoints,
    ...loginHistoryEndpoints
  }
}