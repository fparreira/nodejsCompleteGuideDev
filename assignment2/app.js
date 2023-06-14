const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('first middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('second middleware');
//     res.send('<h1>Content of second middleware</h1>');
//     next();
// });

app.use('/usersplus', (req, res, next) => {
    res.send('<h1>Content of /usersplus</h1>');
});

app.use('/users', (req, res, next) => {
    res.send('<h1>Content of /users request</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Content of / request</h1>');
    // next();
});

app.listen(3000);