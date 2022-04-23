const Repository = require('./Repository')
const { dbService } = require('../../services')
module.exports = dbService(Repository)