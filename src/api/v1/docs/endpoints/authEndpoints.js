module.exports = {
  '/login': {
    post: {
      tags: ['Auth'],
      summary: 'Login with User Email and Password',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#components/schemas/LoginUser'
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
                $ref: '#components/schemas/LoginUser'
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
  },
  '/logout': {
    post: {
      tags: ['Auth'],
      security: [{ 'jsonWebToken': [] }],
      summary: 'Logout and revoke Token',
      responses: {
        '200': {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                example: { message: 'token revoked' }
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
  }
}