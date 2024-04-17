const serverless = require('serverless-http');

const app = require("http").createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
});

exports.handler = serverless(app);