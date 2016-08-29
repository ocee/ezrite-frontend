import SearchApp from './../template/search.js'

let index = (router) => {
  router.get('/search', function*(next) {
    try {
      this.response.type = 'text/html'
      this.body = SearchApp.pageTemplate()

    } catch (error) {
      throw error;
    }
  })
}

module.exports = index
