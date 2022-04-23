const User = require('../components/user/User')
const LoginHistory = require('../components/loginHistory/LoginHistory')

User.hasMany(LoginHistory)
LoginHistory.belongsTo(User)