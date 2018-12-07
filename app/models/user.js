const Joi = require('joi')
const _ = require('lodash')

const props = {
  id: Joi.number().integer().description('id'),
  phone: Joi.string().description('phone'),
  password: Joi.string().description('password')
}

const schema = Joi.object().keys(props).description('user info')

module.exports = {
  schema,
  index: {
    path: '/users',
    method: 'get',
    tags: ['users'],
    summary: 'get user list',
    query: _.pick(props, ['phone']),
    output: {
      200: Joi.object().keys({
        result: Joi.array().items(props).description('result')
      })
    }
  },
  create: {
    path: '/users',
    method: 'post',
    tags: ['users'],
    summary: 'create user',
    requestBody: {
      body: _.pick(props, ['phone', 'password']),
      required: ['phone', 'password']
    },
    output: {
      200: Joi.object().keys(props).description('result')
    }
  },
  show: {
    path: '/users/:id',
    method: 'get',
    tags: ['users'],
    summary: 'get user info',
    params: _.pick(props, ['id']),
    output: {
      200: Joi.object().keys(props).description('result')
    }
  },
  update: {
    path: '/users/{id}',
    method: 'put',
    tags: ['users'],
    summary: 'update user',
    params: _.pick(props, ['id']),
    requestBody: {
      body: _.pick(props, ['phone'])
    }
  },
  destroy: {
    path: '/users/:id',
    method: 'delete',
    tags: ['users'],
    summary: 'destroy user',
    params: _.pick(props, ['id'])
  }
}
