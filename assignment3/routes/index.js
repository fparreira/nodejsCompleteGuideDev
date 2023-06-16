const express = require('express');

const path = require('path');
const rootDir = require('../utils/path');

console.log(rootDir);

const router = express.Router();

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
    // res.send('route 1');

});


router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
    // res.send('route 2');

});



module.exports = router;

