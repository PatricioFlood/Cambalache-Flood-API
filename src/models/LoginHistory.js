const { DataTypes } = require('sequelize')
const { sequelize } =  require('../services')

const LoginHistory = sequelize.define('login_histories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  datetime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM(loginTypes),
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

const loginTypes = ['default']

module.exports = LoginHistory