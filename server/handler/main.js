module.exports = function(router){
  require('./home')(router);
  require('./search')(router);
  require('./user')(router);
};
