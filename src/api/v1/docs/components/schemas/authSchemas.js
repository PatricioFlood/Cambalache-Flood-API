module.exports = {
  LoginUser: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        example: 1,
        readOnly: 'true'
      },
      name: {
        type: 'string',
        example: 'Patricio',
        readOnly: 'true'
      },
      email: {
        type: 'string',
        example: 'email@example.com'
      },
      birthday: {
        type: 'string',
        example: '1999-03-11',
        readOnly: 'true'
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
        example: 'python',
        readOnly: 'true'
      },
      password: {
        type: 'string',
        example: '123456',
        writeOnly: 'true'
      },
      token: {
        type: 'string',
        example: 'eyJhbGciOiJIUzI1NiJ8.MQ.28fPLZWzdebJstob56FpbOi9zbxjNaGLGzUzJewlsOE',
        readOnly: 'true'
      }
    }
  }
}