import SearchApp from './../template/search.js'
import searchService from './../service/search'
import util from './../../common/utils'

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
  });
  router.post('/api/job', function*(next) {
    try {
      console.log(this.session.user);
      console.log(this.request.body);
      let jobPost = this.request.body,
      userId = this.session.user.ezrite_user_id,
      uuid = util.getUuid(),

      result = yield searchService.createJob(jobPost.title, jobPost.description, userId, uuid)
      this.status = 200
      this.body = result
    } catch (error) {
      throw error;
    }
  })
}

module.exports = index
