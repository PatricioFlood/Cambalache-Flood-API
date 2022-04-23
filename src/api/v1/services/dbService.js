const dbService = (Model, ModelAssociated) => ({

  create: async (model) => {
    const newModel = await Model.create(model, { raw: true })
    console.log(newModel)
    return newModel
  },

  get: async (id) => {
    return await Model.findByPk(id, { includes: ModelAssociated, raw: true })
  },

  getAll: async () => {
    return await Model.findAll({ raw: true })
  },

  update: async (id, updates) => {
    const model = await Model.findByPk(id)
    model.set(updates)
    return await model.save({ raw: true })
  },

  remove: async (id) => {
    const model = await Model.findByPk(id)
    if(model)
      await model.destroy()
  },

  findOne: async (params) => {
    return await Model.findOne(params)
  }
})

module.exports = dbService