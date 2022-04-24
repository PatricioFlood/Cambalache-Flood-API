module.exports = {
  '/users': {
    post: {
      tags: ['User'],
      summary: 'Create a new User',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemas/User'
            }
          }
        },
        required: true,
      },
      responses: {
        '201': {
          description: 'Created',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#components/schemas/User'
              }
            }
          }
        },
        '400': {
          $ref: '#components/responses/BadRequest'
        },
        '500': {
          $ref: '#components/responses/InternalServerError'
        }
      }
    },
    get: {
      tags: ['User'],
      security: [{ 'jsonWebToken': [] }],
      summary: 'Get all Users',
      responses: {
        '201': {
          description: 'Created',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#components/schemas/User'
                }
              }
            }
          }
        },
        '401': {
          $ref: '#components/responses/Unauthorized'
        },
        '500': {
          $ref: '#components/responses/InternalServerError'
        }
      }
    }
  },
  '/users/{userId}': {
    get: {
      tags: ['User'],
      security: [{ 'jsonWebToken': [] }],
      summary: 'Get User by ID',
      parameters: [{
        name: 'userId',
        in: 'path',
        required: 'ture',
        schema: {
          type: 'integer'
        }
      }],
      responses: {
        '200': {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#components/schemas/User'
              }
            }
          }
        },
        '401': {
          $ref: '#components/responses/Unauthorized'
        },
        '404': {
          description: 'Error: Not Found'
        },
        '500': {
          $ref: '#components/responses/InternalServerError'
        }
      }
    },
    put: {
      tags: ['User'],
      security: [{ 'jsonWebToken': [] }],
      summary: 'Update User by ID',
      parameters: [{
        name: 'userId',
        in: 'path',
        required: 'ture',
        schema: {
          type: 'integer'
        }
      }],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemas/User'
            }
          }
        },
        required: true,
      },
      responses: {
        '200': {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#components/schemas/User'
              }
            }
          }
        },
        '400': {
          $ref: '#components/responses/BadRequest'
        },
        '401': {
          $ref: '#components/responses/Unauthorized'
        },
        '404': {
          description: 'Error: Not Found'
        },
        '500': {
          $ref: '#components/responses/InternalServerError'
        }
      }
    },
    delete: {
      tags: ['User'],
      security: [{ 'jsonWebToken': [] }],
      summary: 'Delete User by ID',
      parameters: [{
        name: 'userId',
        in: 'path',
        required: 'ture',
        schema: {
          type: 'integer'
        }
      }],
      responses: {
        '204': {
          description: 'No Content'
        },
        '401': {
          $ref: '#components/responses/Unauthorized'
        },
        '500': {
          $ref: '#components/responses/InternalServerError'
        }
      }
    },
  }
}
