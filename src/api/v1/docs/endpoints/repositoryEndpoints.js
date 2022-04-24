module.exports = {
  '/repositories': {
    post: {
      tags: ['Repository'],
      security: [{ 'jsonWebToken': [] }],
      summary: 'Create a new Repository',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemas/Repository'
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
                $ref: '#components/schemas/Repository'
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
        '500': {
          $ref: '#components/responses/InternalServerError'
        }
      }
    },
    get: {
      tags: ['Repository'],
      security: [{ 'jsonWebToken': [] }],
      summary: 'Get all Repositories',
      responses: {
        '201': {
          description: 'Created',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#components/schemas/Repository'
                }
              }
            }
          }
        },
        '401': {
          $ref: '#components/responses/Unauthorized'
        }
      }
    }
  },
  '/repositories/{repositoryId}': {
    get: {
      tags: ['Repository'],
      security: [{ 'jsonWebToken': [] }],
      summary: 'Get Repository by ID',
      parameters: [{
        name: 'repositoryId',
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
                $ref: '#components/schemas/Repository'
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
      tags: ['Repository'],
      security: [{ 'jsonWebToken': [] }],
      summary: 'Update Repository by ID',
      parameters: [{
        name: 'repositoryId',
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
              $ref: '#components/schemas/Repository'
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
                $ref: '#components/schemas/Repository'
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
      tags: ['Repository'],
      security: [{ 'jsonWebToken': [] }],
      summary: 'Delete Repository by ID',
      parameters: [{
        name: 'repositoryId',
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
