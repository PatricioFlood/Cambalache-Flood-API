module.exports = {
  ShortLoginHistory: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        example: 1,
        readOnly: 'true'
      },
      datetime: {
        type: 'string',
        example: '2022-04-24T00:41:13.257Z'
      },
      type: {
        type: 'string',
        enum: [
          'default',
          'other'
        ],
        example: 'default'
      },
      userId: {
        type: 'integer',
        example: 1
      }
    },
    required: ['id', 'datetime', 'type', 'userId']
  },
  LoginHistory: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
        example: 1,
        readOnly: 'true'
      },
      datetime: {
        type: 'string',
        example: '2022-04-24T00:41:13.257Z'
      },
      type: {
        type: 'string',
        enum: [
          'default',
          'other'
        ],
        example: 'default'
      },
      user: {
        type: 'object',
        $ref: '#components/schemas/ShortUser'
      }
    }
  }
}