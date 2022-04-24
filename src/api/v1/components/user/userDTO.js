const userDTO = {
  single: ({ id, name, email, birthday, favoritePLanguage, login_histories, created_at, updated_at }) =>
    ({ id, name, email, birthday, favoritePLanguage, login_histories, created_at, updated_at }),

  multiple: (users) => users.map(
    ({ id, name, email, birthday, favoritePLanguage }) =>
      ({ id, name, email, birthday, favoritePLanguage })
  )
}

module.exports = userDTO