const LoginHistory = require('./LoginHistory')
const User = require('../user/User')
const { dbService } = require('../../services')
module.exports = dbService(LoginHistory, User)