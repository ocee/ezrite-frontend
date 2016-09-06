import userService from './../service/user'
import util from './../../common/utils'

module.exports = function(router) {
  router.get('/api/user/logout', function*(next) {
    try {
      this.session.user = null
      this.status = 200
    } catch (error) {
      throw error;
    }
  });
  router.post('/api/user/login', function*(next) {
    try {
      let pw = this.request.body.password,
      email = this.request.body.email,
      user = yield userService.getUserByEmail(email),
      isValid = yield util.validatePasswordHash(pw, user.password)

      if(user){
          delete user.password
          this.session.user = user
          this.status = 200
          this.body = user
      }else{
        this.status = 404
      }

    } catch (error) {
      throw error;
    }
  });
  router.post('/api/user/register', function*(next) {
    try {
      let pw = this.request.body.password,
      email = this.request.body.email,
      user = yield userService.getUserByEmail(email),
      uuid = util.getUuid(),
      result = null,
      profile = this.request.body.profile,
      pwHash = null;

      if(user){
        this.body = "user already exists.";
        return this.response.status = 409;
      }

      pwHash = yield util.hashPassword(pw);
      console.log(pwHash);
      result = yield userService.createUser(uuid,email,pwHash,profile);
      this.response.status = 200;
      this.body = result
    } catch (error) {
      throw error;
    }
  });
}
