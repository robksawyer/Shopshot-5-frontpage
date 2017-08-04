var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('./db/db.json');
var middlewares = jsonServer.defaults();

require('dotenv').config({ path: __dirname + '../src/server/config/.env' });

console.log('Running Server Side Rendering w/API ' + process.env.BASE_API);
server.use(middlewares);
server.use(process.env.BASE_API, router);

server.post('/auth', function (req, res) {
  res.json({token: 'nothing'})
})

server.listen(4000, function () {
  console.log('JSON Server is running')
})
