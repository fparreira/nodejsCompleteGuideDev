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

function showNumbers(boolean, arg2, callback){

    console.log('start asynchronous operation');

    const message = 'the message is : ';

    if (boolean) {
        console.log('success !!' + arg2);
    } else {
        console.log('error !!');
    } 

}

showNumbers(true, 'fernando');