const bcrypt = require('bcrypt')
const authDTO = require('./authDTO')
const userService = require('../user/userService')
const loginHistoryService = require('../loginHistory/loginHistoryService')
const jwtService = require('../../services/jwtService')
const authController = {

  login: async (req, res) => {
    const { email, password } = req.body

    if(!password)
      return res.status(400).json({ error: 'password is required' })
    if(!email)
      return res.status(400).json({ error: 'email is required' })

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
      datetime: new Date(),
      type: 'default',
      userId: user.id
    })

    user.token  = jwtService.sign({ userId: user.id })

    return res.status(200).send(authDTO.single(user))
  },

  logout: async (req, res) => {
    await jwtService.revoke(req.token)

    return res.status(200).json({ message: 'token revoked' })
  }
}

module.exports = authController