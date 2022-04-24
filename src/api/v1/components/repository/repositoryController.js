const repositoryService = require('./repositoryService')

const RepositoryController = {

  create: async (req, res) => {
    const repository = req.body
    delete repository.id

    const newRepository = await repositoryService.create(repository)

    return res.json(newRepository)
  },

  view: async (req, res) => {
    const id = req.params.id

    if(id){
      const repository = await repositoryService.get(id)

      if(repository)
        return res.json(repository)

      return res.status(404).end()
    }

    const repositories = await repositoryService.getAll()

    return res.json(repositories)
  },

  update: async (req, res) => {
    const id = req.params.id

    const repository = await repositoryService.update(id, req.body)
    if(repository)
      return res.json(repository)

    return res.status(404).end()
  },

  remove: async (req, res) => {
    const id = req.params.id
    await repositoryService.remove(id)
    return res.status(204).end()
  }

}

module.exports = RepositoryController