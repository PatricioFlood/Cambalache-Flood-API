module.exports = {
  '/loginHistories': {
    post: {
      tags: ['LoginHistory'],
      security: [{ 'jsonWebToken': [] }],
      summary: 'Create a new LoginHistory',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemas/LoginHistory'
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
                $ref: '#components/schemas/LoginHistory'
              }
            }
          }
        },
        '400': {
          $ref: '#components/responses/BadRequest'
        },
        '401': {
          $ref: '#components/responses/Unauthorized'
        }
      }
    },
    get: {
      tags: ['LoginHistory'],
      security: [{ 'jsonWebToken': [] }],
      summary: 'Get all LoginHistories',
      responses: {
        '201': {
          description: 'Created',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#components/schemas/ShortLoginHistory'
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
  '/loginHistories/{loginHistoryId}': {
    get: {
      tags: ['LoginHistory'],
      security: [{ 'jsonWebToken': [] }],
      summary: 'Get LoginHistory by ID',
      parameters: [{
        name: 'loginHistoryId',
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
                $ref: '#components/schemas/LoginHistory'
              }
            }
          }
        },
        '401': {
          $ref: '#components/responses/Unauthorized'
        },
        '404': {
          description: 'Error: Not Found'
        }
      }
    },
    put: {
      tags: ['LoginHistory'],
      security: [{ 'jsonWebToken': [] }],
      summary: 'Update LoginHistory by ID',
      parameters: [{
        name: 'loginHistoryId',
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
              $ref: '#components/schemas/LoginHistory'
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
                $ref: '#components/schemas/LoginHistory'
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
        }
      }
    },
    delete: {
      tags: ['LoginHistory'],
      security: [{ 'jsonWebToken': [] }],
      summary: 'Delete LoginHistory by ID',
      parameters: [{
        name: 'loginHistoryId',
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
        }
      }
    },
  }
}
