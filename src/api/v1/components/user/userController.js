const bcrypt = require('bcrypt')
const userService = require('./userService')

const UserController = {

  create: async (req, res) => {
    const user = req.body
    delete user.id

    if(!user.password)
      return res.status(400).json({ error: 'password is required' })

    const passwordHash = await bcrypt.hash(user.password, 10)

    const newUser = await userService.create({
      ...user,
      password: passwordHash
    })

    delete newUser.password

    return res.status(201).json(newUser)
  },

  view: async (req, res) => {
    const id = req.params.id
    if(id){
      const user = await userService.get(id)
      if(user){
        delete user.password
        return res.json(user)
      }
      return res.status(404).end()
    }

    const users = await userService.getAll()
    const resUsers = users.map(user => {
      delete user.password
      return user
    })

    return res.json(resUsers)
  },

  update: async (req, res) => {
    const id = req.params.id
    const updates = req.body
    delete updates.id

    const user = await userService.update(id, updates)

    if(user){
      delete user.password
      return res.json(user)
    }

    return res.status(404).end()
  },

  remove: async (req, res) => {
    const id = req.params.id
    await userService.remove(id)
    return res.status(204).end()
  }

}

module.exports = UserController