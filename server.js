var config = require('config');
var serverConfig = config.get('server');
var app = require('koa')();
var router = require('koa-router');
var api = router();
var serve = require('koa-static');

//initialize handlers
require('./server/handler/main')(api);
//initialize services
// require('./service/main')(api);

app.use(api.routes());
app.use(api.allowedMethods());
// or use absolute paths
app.use(serve(__dirname + '/public'));
// app.use(serve(__dirname + '/client/template'));

app.listen(serverConfig.port);
