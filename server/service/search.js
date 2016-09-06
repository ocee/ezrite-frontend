var db = require('./database');

module.exports = {
  searchJob: function*(term) {
    if (!term) {
      console.log('throw term error');
      throw new Error('term is null');
    }

    try {
      var result = null,
      sqlStatement = `SELECT job_id, title, description FROM job WHERE title LIKE $1 OR description LIKE $1`;
      result = yield db.executeScript(sqlStatement, ['%' + term + '%']);

      if (result.length > 0) {
        return result;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
}
