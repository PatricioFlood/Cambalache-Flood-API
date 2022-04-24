const LoginHistory = require('./LoginHistory')
const { dbService } = require('../../services')
module.exports = dbService({ Model: LoginHistory })