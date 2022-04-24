const repositoryDTO = {
  single: ({ id, projectName, language, creationDate, description, created_at, updated_at }) =>
    ({ id, projectName, language, creationDate, description, created_at, updated_at }),

  multiple: (repositories) => repositories.map(
    ({ id, projectName, language, creationDate, description }) =>
      ({ id, projectName, language, creationDate, description })
  )
}

module.exports = repositoryDTO