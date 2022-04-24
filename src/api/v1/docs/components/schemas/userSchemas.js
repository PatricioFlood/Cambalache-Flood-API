module.exports = {
  ShortUser: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        example: 1,
        readOnly: 'true'
      },
      name: {
        type: 'string',
        example: 'Patricio'
      },
      email: {
        type: 'string',
        example: 'email@example.com'
      },
      birthday: {
        type: 'string',
        example: '1999-03-11'
      },
      favoritePLanguage: {
        type: 'string',
        enum: [
          'python',
          'javascript',
          'java',
          'c++',
          'php',
        ],
        example: 'python'
      },
      password: {
        type: 'string',
        example: '123456',
        writeOnly: 'true'
      }
    },
    required: ['id', 'email', 'birthday', 'password']
  },

  User: {
    allOf: [{
      $ref: '#components/schemas/ShortUser',
      type: 'object',
    }],
    properties: {
      created_at: {
        type: 'string',
        example: '2022-04-24T00:41:13.257Z',
        readOnly: 'true'
      },
      updated_at: {
        type: 'string',
        example: '2022-04-24T00:41:13.257Z',
        readOnly: 'true'
      }
    }
  }
}