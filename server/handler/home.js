let HomeApp = require('./../template/home.js')

let index = (router) => {
  router.get('/home', function*(next) {
    try {
      this.response.type = 'text/html'
      this.body = HomeApp.pageTemplate()

    } catch (error) {
      throw error;
    }
  })
}

module.exports = index
