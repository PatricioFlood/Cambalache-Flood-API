const bcrypt = require('bcrypt')
const moment = require('moment')
const userService = require('./userService')
const userDTO = require('./userDTO')

const UserController = {

  create: async (req, res) => {
    const user = req.body
    delete user.id
    if(user.birthday)
      user.birthday = moment(user.birthday , ['MM-DD-YYYY', 'YYYY-MM-DD'])
    if(!user.password)
      return res.status(400).json({ error: 'password is required' })

    const passwordHash = await bcrypt.hash(user.password, 10)

    const newUser = await userService.create({
      ...user,
      password: passwordHash
    })

    return res.status(201).json(userDTO.single(newUser))
  },

  view: async (req, res) => {
    const id = req.params.id
    const user = await userService.get(id)
    if(user){
      return res.json(userDTO.single(user))
    }
    return res.status(404).end()
  },

  viewAll: async (_req, res) => {
    const users = await userService.getAll()

    return res.json(userDTO.multiple(users))
  },

  update: async (req, res) => {
    const id = req.params.id
    const updates = req.body

    delete updates.id
    if(updates.birthday)
      updates.birthday = moment(updates.birthday , ['MM-DD-YYYY', 'YYYY-MM-DD'])
    if(updates.password)
      updates.password = await bcrypt.hash(updates.password, 10)

    const user = await userService.update(id, updates)

    if(user)
      return res.json(userDTO.single(user))

    return res.status(404).end()
  },

  remove: async (req, res) => {
    const id = req.params.id
    await userService.remove(id)
    return res.status(204).end()
  }

}

module.exports = UserController