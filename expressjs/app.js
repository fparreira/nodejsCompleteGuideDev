// const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In middleware product!');
    res.send('<h1>The "Add Product" page</h1>')
});

app.use('/', (req, res, next) => {
    console.log('In the another middleware!');
    res.send('<h1>Hello from ExpressJs</h1>')
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);