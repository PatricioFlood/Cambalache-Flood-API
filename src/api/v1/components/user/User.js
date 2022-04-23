const { DataTypes } = require('sequelize')
const { sequelize } =  require('../../services')

const programmingLanguages = [
  'python',
  'javascript',
  'java',
  'c++',
  'php',
]

const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isEmail: { msg: 'invalid email address' },
    },
    unique: true
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  favoritePLanguage: {
    type: DataTypes.ENUM(programmingLanguages)
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

module.exports = User