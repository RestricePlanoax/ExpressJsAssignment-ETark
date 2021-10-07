const http = require('http');
const app = require('./app')
const port = 3000;

const server = http.createServer(app);
console.log("RUNNING ON 3000")
server.listen(port);