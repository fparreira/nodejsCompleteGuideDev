// const express = require('express');

// const app = express();

// app.use('/fernando',(req, res) => {
//     res.send('Hello World');
// });

// // console.log(process.mainModule);

// // console.log(require.main);


// let group = [];
// let name = 'fernando';
// let age = 46;
// let nameJsonStringify = JSON.stringify(name);
// let nameJsonParse = JSON.parse(nameJsonStringify);

// console.log(typeof nameJsonStringify);
// console.log(typeof nameJsonParse);

// app.listen(3000);

// function AssynchronousOperation(callback){

//     setTimeout(() => {
//         const value = 10;
//         callback(value);
//     }, 5000);

//     console.log('end of function AssynchronousOperation');

// }

// function AssynchronousWithError(simulateError, callback){

//     const err = new Error('error on function result!!!!');

//     if (simulateError == 0) {
//         callback(err, '');
//     } else {
//         setTimeout( ()=> {
//             const message = 'everything is right !';
//             callback('', message);
//         },5000);
//     }

// }

// AssynchronousOperation((arg) => {
//     console.log('the value is ' + arg);
// });

// AssynchronousWithError(0, (err, msg) => {

//     if (err) {
//         console.log('function return error!!!');
//     } else {
//         console.log(msg);
//     }
    
// });

// const numbers = [4,6,2,77,43,543,665,23,89,23,65];

// return the index of element that pass on test
// console.log(numbers.findIndex(number => number > 30));

const myConnection = new Promise((resolve, reject) => {

    const connection = true;

    setTimeout(() => {

        if (connection) {
            resolve("success on connection")
        } else {
            reject("connection fail !!")
        }

    }, 3000);

});

myConnection
    .then(result => {
        console.log(result);
    })
    .then(() => {
        console.log('list of products');
    })
    .catch(error => {
        console.log(error);
    })