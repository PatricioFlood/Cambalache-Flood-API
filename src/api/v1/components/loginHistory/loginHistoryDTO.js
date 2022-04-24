const loginHistoryDTO = {
  single: ({ id, datetime, type, user }) =>
    ({
      id,
      datetime,
      type,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        birthday: user.birthday,
        favoritePLanguage: user.favoritePLanguage
      }
    }),

  multiple: (loginHistories) => loginHistories.map(
    ({ id, datetime, type, userId }) =>
      ({ id, datetime, type, userId })
  )
}

module.exports = loginHistoryDTO