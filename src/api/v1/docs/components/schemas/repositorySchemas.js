module.exports = {
  ShortRepository: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        example: 1,
        readOnly: 'true'
      },
      projectName: {
        type: 'string',
        example: 'Rest API'
      },
      language: {
        type: 'string',
        enum: [
          'html',
          'css',
          'javascript',
          'python',
          'java',
          'c++',
          'php',
        ],
        example: 'javascript'
      },
      creationDate: {
        type: 'string',
        example: '1999-03-11'
      },
      description: {
        type: 'string',
        example: 'This repository is an REST API with Javascript',
      }
    },
    required: ['id', 'projectName', 'language', 'creationDate']
  },

  Repository: {
    allOf: [{
      $ref: '#components/schemas/ShortRepository',
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