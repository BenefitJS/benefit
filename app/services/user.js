const BaseService = require('../common/base_service')

class UserService extends BaseService {
  async index (params) {
    this.ctx.throw(400, 'Hello World')
    // console.log('-------->', params)
    return 'Hello'
  }
  async create (params) {
    // console.log('-------->', params)
    return 'world'
  }
  async show (params) {
    // console.log('-------->', params)
    return 'Hello'
  }
  async update (params) {
    // console.log('-------->', params)
    return 'world'
  }
  async destroy (params) {
    // console.log('-------->', params)
    return 'Hello'
  }
}

module.exports = new UserService()
