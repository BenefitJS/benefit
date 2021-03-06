const request = require('supertest')
require('should')
const server = require('./index')
const describe = require('mocha').describe
const it = require('mocha').it

describe('GET /users!!!', () => {
  it('response get /users result!!', () => {
    request(server)
      .get('/v1/users')
      .set('Accept', 'application/json')
      .expect(200)
      .then(res => {
        res.text.should.be.String()
        res.body.should.be.Object()
      })
  })
})

describe('POST /users!!!', () => {
  it('response post /users success!!', () => {
    request(server)
      .post('/v1/users')
      .send({ phone: '13322224444', password: 'hahaha.js' })
      .set('Accept', 'application/json')
      .expect(200)
      .then(res => {
        res.text.should.be.String()
        res.body.should.be.Object()
      })
  })

  it('requires property "password"', function () {
    request(server)
      .post('/v1/users')
      .send({ phone: '13322221111' })
      .set('Accept', 'application/json')
      .expect(422)
      .then(response => {
        response.body.should.be.Object()
      })
  })

  it('requires property "phone"', function () {
    request(server)
      .post('/v1/users')
      .send({ password: 'hahahahhaha' })
      .set('Accept', 'application/json')
      .expect(422)
      .then(response => {
        response.body.should.be.Object()
      })
  })
})

describe('GET /users/:id!!!', () => {
  it('response success!!', () => {
    request(server)
      .get('/v1/users/1')
      .set('Accept', 'application/json')
      .expect(200)
      .then(res => {
        res.text.should.be.String()
        res.body.should.be.Object()
      })
  })
})

describe('UPDATE /users/:id!!!', () => {
  it('response success!!', () => {
    request(server)
      .put('/v1/users/1')
      .send({ password: 'asdxzas123' })
      .set('Accept', 'application/json')
      .expect(200)
      .then(res => {
        res.text.should.be.String()
        res.body.should.be.Object()
      })
  })
})

describe('DELETE /users/:id!!!', () => {
  it('response success!!', () => {
    request(server)
      .delete('/v1/users/1')
      .set('Accept', 'application/json')
      .expect(200)
      .then(res => {
        res.text.should.be.String()
        res.body.should.be.Object()
      })
  })
})
