const loginHistoryService = require('./loginHistoryService')
const loginHistoryDTO = require('./loginHistoryDTO')

const loginHistoryController = {

  create: async (req, res) => {
    const loginHistory = req.body
    delete loginHistory.id

    const newLoginHistory = await loginHistoryService.create(loginHistory)

    return res.status(201).json(loginHistoryDTO.single(newLoginHistory))
  },

  view: async (req, res) => {
    const id = req.params.id

    const loginHistory = await loginHistoryService.get(id)

    if(loginHistory)
      return res.json(loginHistoryDTO.single(loginHistory))

    return res.status(404).end()
  },

  viewAll: async (req, res) => {
    const { userId } = req.query

    const params = userId ? { where: { userId } } : null
    const repositories = await loginHistoryService.getAll(params)

    return res.json(loginHistoryDTO.multiple(repositories))
  },

  update: async (req, res) => {
    const id = req.params.id
    const updates = req.body
    delete updates.id

    const loginHistory = await loginHistoryService.update(id, updates)
    if(loginHistory)
      return res.json(loginHistoryDTO.single(loginHistory))

    return res.status(404).end()
  },

  remove: async (req, res) => {
    const id = req.params.id
    await loginHistoryService.remove(id)

    return res.status(204).end()
  }

}

module.exports = loginHistoryController