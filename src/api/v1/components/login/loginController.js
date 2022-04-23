const bcrypt = require('bcrypt')
const { dbService } = require('../../services')
const { loginHistoryService, userService } = dbService

const LoginController = {
  login: async (req, res) => {
    const { email, password } = req.body

    const user = await userService.findOne({ where: { email } })

    const passwordCorrect = user === null
      ? false
      : await bcrypt.compare(password, user.password)

    if (!passwordCorrect) {
      return res.status(400).json({
        error: 'invalid email or password'
      })
    }

    loginHistoryService.create({
      datetime: Date.now(),
      type: 'default',
      userId: user.id
    })

    delete user.password
    return res.status(200).send(user)
  }
}

module.exports = LoginController