const express = require('express');

const app = express();

app.use('/fernando',(req, res) => {
    res.send('Hello World');
});

// console.log(process.mainModule);

// console.log(require.main);


let group = [];
let name = 'fernando';
let age = 46;
let nameJsonStringify = JSON.stringify(name);
let nameJsonParse = JSON.parse(nameJsonStringify);

console.log(typeof nameJsonStringify);
console.log(typeof nameJsonParse);

app.listen(3000);