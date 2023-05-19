const http = require('http');

// console.log(http);

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);