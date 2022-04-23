const User = require('./User')
const LoginHistory = require('./LoginHistory')
const Repository = require('./Repository')

User.hasMany(LoginHistory)
LoginHistory.belongsTo(User)

module.exports = {
  User,
  LoginHistory,
  Repository
}