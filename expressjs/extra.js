const express = require('express');

const app = express();

app.use('/fernando',(req, res) => {
    res.send('Hello World');
});

console.log(process.mainModule);

console.log(require.main);

app.listen(3000);