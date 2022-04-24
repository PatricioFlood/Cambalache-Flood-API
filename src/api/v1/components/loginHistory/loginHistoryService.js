const LoginHistory = require('./LoginHistory')
const User = require('../user/User')
const { dbService } = require('../../services')
module.exports = dbService({
  Model: LoginHistory,
  associatedModel: User,
  associatedAttributes: ['id', 'name', 'email', 'birthday', 'favoritePLanguage']
})