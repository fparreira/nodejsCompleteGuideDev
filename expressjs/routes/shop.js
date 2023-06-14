const express = require('express');

const path = require('path');

// console.log(path);
// console.log(__dirname);
// console.log(__filename);

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('In the another middleware!');
    // res.send('<h1>Hello from ExpressJs</h1>')
    res.sendFile(path.join(__dirname, '../', 'views/shop.html'));
});

module.exports = router;