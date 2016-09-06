import SearchApp from './../template/search.js'
import searchService from './../service/search'

let index = (router) => {
  router.get('/api/search', function*(next) {
    try {
      let searchTerm = this.query.q,
      result = yield searchService.searchJob(searchTerm)
      this.status = 200
      this.body = result
    } catch (error) {
      throw error;
    }
  })
}

module.exports = index
