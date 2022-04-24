const single = ({ id, projectName, language, creationDate, description }) =>
  ({ id, projectName, language, creationDate, description })

const multiple = (repositories) => repositories.map(single)

module.exports = {
  single,
  multiple
}