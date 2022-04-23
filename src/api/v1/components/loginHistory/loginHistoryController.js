const loginHistoryService = require('./loginHistoryService')

const LoginHistoryController = {

  create: async (req, res) => {
    const loginHistory = req.body
    delete loginHistory.id

    const newLoginHistory = await loginHistoryService.create(loginHistory)

    return res.json(newLoginHistory)
  },

  view: async (req, res) => {
    const id = req.params.id

    if(id){
      const loginHistory = await loginHistoryService.get(id)

      if(loginHistory)
        return res.json(loginHistory)

      return res.status(404).end()
    }

    const repositories = await loginHistoryService.getAll()

    return res.json(repositories)
  },

  update: async (req, res) => {
    const id = req.params.id

    const loginHistory = await loginHistoryService.update(id, req.body)
    if(loginHistory)
      return res.json(loginHistory)

    return res.status(404).end()
  },

  remove: async (req, res) => {
    const id = req.params.id
    await loginHistoryService.remove(id)
    return res.status(204).end()
  }

}

module.exports = LoginHistoryController