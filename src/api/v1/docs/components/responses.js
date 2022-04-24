module.exports = {
  responses: {
    BadRequest: {
      description: 'Error: Bad Request',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            $ref: '#components/schemas/Error'
          },
          examples: {
            'Missing Required Field': {
              value: { error: 'field is required' }
            },
            'Malformed Field': {
              value: { error: 'malformed field' }
            },
            'Malformed Body': {
              value: { error: 'malformed body' }
            }
          }
        }
      }
    },
    Unauthorized: {
      description: 'Error: Unauthorized',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            $ref: '#components/schemas/Error'
          },
          examples: {
            'No Token Provided': {
              value: { error: 'no token provided' }
            },
            'Invalid Token': {
              value: { error: 'invalid token' }
            },
            'Token Expired': {
              value: { error: 'token expired' }
            }
          }
        }
      }
    }
  }
}