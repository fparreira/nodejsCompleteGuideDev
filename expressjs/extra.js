const express = require('express');

const app = express();

app.use('/fernando',(req, res) => {
    res.send('Hello World');
});

app.listen(3000);