const single = ({ id, name, email, birthday, favoritePLanguage }) =>
  ({ id, name, email, birthday, favoritePLanguage })

const multiple = (users) => users.map(single)

module.exports = {
  single,
  multiple
}