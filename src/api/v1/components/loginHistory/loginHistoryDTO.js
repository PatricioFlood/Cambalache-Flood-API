const single = ({ id, datetime, type, userId }) =>
  ({ id, datetime, type, userId })

const multiple = (loginHistories) => loginHistories.map(single)

module.exports = {
  single,
  multiple
}