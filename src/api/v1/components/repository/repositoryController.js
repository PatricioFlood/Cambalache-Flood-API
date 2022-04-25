const moment = require('moment')
const repositoryService = require('./repositoryService')
const repositoryDTO = require('./repositoryDTO')

const RepositoryController = {

  create: async (req, res) => {
    const repository = req.body
    delete repository.id
    if(repository.creationDate)
      repository.creationDate = moment(repository.creationDate , ['MM-DD-YYYY', 'YYYY-MM-DD'])

    const newRepository = await repositoryService.create(repository)

    return res.status(201).json(repositoryDTO.single(newRepository))
  },

  view: async (req, res) => {
    const id = req.params.id
    const repository = await repositoryService.get(id)

    if(repository)
      return res.json(repositoryDTO.single(repository))

    return res.status(404).end()
  },

  viewAll: async (_req, res) => {
    const repositories = await repositoryService.getAll()

    return res.json(repositoryDTO.multiple(repositories))
  },

  update: async (req, res) => {
    const id = req.params.id
    const updates = req.body
    delete updates.id
    if(updates.creationDate)
      updates.creationDate = moment(updates.creationDate , ['MM-DD-YYYY', 'YYYY-MM-DD'])

    const repository = await repositoryService.update(id, updates)
    if(repository)
      return res.json(repositoryDTO.single(repository))

    return res.status(404).end()
  },

  remove: async (req, res) => {
    const id = req.params.id
    await repositoryService.remove(id)
    return res.status(204).end()
  }

}

module.exports = RepositoryController