const dir = require('dir_filenames')
const config = require('../config')
const services = dir(`${config.appRoot}/app/services`)
const models = dir(`${config.appRoot}/app/models`)
const service = {}
const model = {}
services.map(file => {
  let name = file.split('/').pop().replace(/\.\w+$/, '')
  service[name] = require(file)
})
models.map(file => {
  let name = file.split('/').pop().replace(/\.\w+$/, '')
  model[name] = require(file)
})
module.exports = {
  service,
  model
}
