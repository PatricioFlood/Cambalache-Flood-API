module.exports = {
  Repository: {
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
}