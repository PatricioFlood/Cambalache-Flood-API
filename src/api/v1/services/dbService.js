const dbService = ({ Model }) => ({

  create: async (model) => {
    const newModel = await Model.create(model)
    return JSON.parse(JSON.stringify(newModel))
  },

  get: async (id) => {
    const model = await Model.findByPk(id)
    return JSON.parse(JSON.stringify(model))
  },

  getAll: async (params) => {
    return await Model.findAll({ ...params, raw: true })
  },

  update: async (id, updates) => {
    const model = await Model.findByPk(id)
    if(model){
      model.set(updates)
      const savedModel = await model.save()
      return JSON.parse(JSON.stringify(savedModel))
    }
    return null
  },

  remove: async (id) => {
    const model = await Model.findByPk(id)
    if(model)
      await model.destroy()
  },

  findOne: async (params) => {
    const model = await Model.findOne(params)
    return JSON.parse(JSON.stringify(model))
  },

})

module.exports = dbService