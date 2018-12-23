const dir = require('dir_filenames')
const config = require('../config')
const services = dir(`${config.appRoot}/app/services`)
const models = dir(`${config.appRoot}/app/models`)
const helper = {
  model: {
    get: () => {
      const model = {}
      models.map(file => {
        let name = file.split('/').pop().replace(/\.\w+$/, '')
        model[name] = require(file)
      })
      return model
    }
  },
  service: {
    get: () => {
      const service = {}
      services.map(file => {
        let name = file.split('/').pop().replace(/\.\w+$/, '')
        service[name] = require(file).prototype
      })
      return service
    }
  }
}
module.exports = helper
