const dir = require('dir_filenames')
const config = require('../../config')
const controllers = dir(`${config.appRoot}/app/controller`)
const controller = {}
controllers.map(file => {
  let name = file.split('/').pop().replace(/\.\w+$/, '')
  controller[name] = require(file)
})
module.exports = {
  controller
}
