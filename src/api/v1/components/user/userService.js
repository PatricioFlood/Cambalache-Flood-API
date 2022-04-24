const User = require('./User')
const { dbService } = require('../../services')
module.exports = dbService({ Model: User })