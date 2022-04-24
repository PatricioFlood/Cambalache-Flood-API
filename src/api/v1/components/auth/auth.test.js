const chai = require('chai')
const chaiHttp = require('chai-http')
require('chai').should()
const server = require('../../app')

chai.use(chaiHttp)

describe('Auth Tests', () => {

  let token = null

  const user = {
    name: 'test',
    email: 'test@test.com',
    birthday: '1999-03-11',
    password: 'test'
  }

  before((done) => {
    chai.request(server)
      .post('/v1/users')
      .send(user)
      .end(() => done())
  })

  describe('Login', () => {

    describe('POST /v1/login', () => {

      describe('With valid email and password', () => {
        it('it should respond with a 200 status and user + token', (done) => {
          const copyUser = { ...user }
          chai.request(server)
            .post('/v1/login')
            .send(copyUser)
            .end((_err, res) => {
              res.should.have.status(200)
              res.body.should.be.a('object')
              res.body.should.have.property('token')
              token = res.body.token
              done()
            })
        })
      }),

      describe('With an invalid email or password', () => {
        it('it should respond with a 400 status and error', (done) => {
          const copyUser = { ...user }
          copyUser.password = 'incorrect'
          chai.request(server)
            .post('/v1/login')
            .send(copyUser)
            .end((_err, res) => {
              res.should.have.status(400)
              res.body.should.be.a('object')
              res.body.should.have.property('error').eq('invalid email or password')
              done()
            })
        })
      }),

      describe('With missing password', () => {
        it('it should respond with a 400 status and error', (done) => {
          const copyUser = { ...user }
          delete copyUser.password
          chai.request(server)
            .post('/v1/login')
            .send(copyUser)
            .end((_err, res) => {
              res.should.have.status(400)
              res.body.should.be.a('object')
              res.body.should.have.property('error').eq('password is required')
              done()
            })
        })
      }),

      describe('With missing email', () => {
        it('it should respond with a 400 status and error', (done) => {
          const copyUser = { ...user }
          delete copyUser.email
          chai.request(server)
            .post('/v1/login')
            .send(copyUser)
            .end((_err, res) => {
              res.should.have.status(400)
              res.body.should.be.a('object')
              res.body.should.have.property('error').eq('email is required')
              done()
            })
        })
      })

    })

  })

  describe('Logout', () => {

    describe('POST /v1/logout', () => {

      describe('Without bearer token', () => {
        it('it should respond with a 401 status and error', (done) => {
          chai.request(server)
            .post('/v1/logout')
            .send()
            .end((_err, res) => {
              res.should.have.status(401)
              res.body.should.be.a('object')
              res.body.should.have.property('error').eq('no token provided')
              done()
            })
        })
      })

      describe('With an invalid token', () => {
        it('it should respond with a 401 status and error', (done) => {
          chai.request(server)
            .post('/v1/logout')
            .set({ 'Authorization': `Bearer ${'123'}` })
            .send()
            .end((_err, res) => {
              res.should.have.status(401)
              res.body.should.be.a('object')
              res.body.should.have.property('error').eq('invalid token')
              done()
            })
        })
      }),

      describe('With a correct token', () => {
        it('it should respond with a 200 status and rovoked token', (done) => {
          chai.request(server)
            .post('/v1/logout')
            .set({ 'Authorization': `Bearer ${token}` })
            .send()
            .end((_err, res) => {
              res.should.have.status(200)
              res.body.should.be.a('object')
              res.body.should.have.property('message').eq('token revoked')
              chai.request(server)
                .post('/v1/logout')
                .set({ 'Authorization': `Bearer ${token}` })
                .send()
                .end((_err, res) => {
                  res.should.have.status(401)
                  res.body.should.be.a('object')
                  res.body.should.have.property('error').eq('invalid token')
                  done()
                })
            })
        })
      })

    })

  })

})