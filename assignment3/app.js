// import express
const express = require('express');

// create a express application // instance express
const app = express();

app.get('/', (req, res, next) => {
    console.log('express application active');
    res.send('fernando parreira');
    next();
})

app.listen(3000);