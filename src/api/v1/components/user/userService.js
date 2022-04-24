const User = require('./User')
const LoginHistory = require('../loginHistory/LoginHistory')
const { dbService } = require('../../services')
module.exports = dbService({ Model: User, associatedModel: LoginHistory })