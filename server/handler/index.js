'use strict'
module.exports = function(router) {
  router.get('/home', function*(next) {
    try {
      let template = require('../template/index');
      let html = template.render();
      this.response.type = 'text/html';
      this.body = html;
    } catch (error) {
      throw error;
    }
  });
}
