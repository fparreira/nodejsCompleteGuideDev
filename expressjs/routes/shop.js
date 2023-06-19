const express = require('express');

const adminData = require('./admin')

const path = require('path');

const rootDir = require('../utils/path');

// console.log(path);
// console.log(__dirname);
// console.log(__filename);

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('In the another middleware!');
    // res.send('<h1>Hello from ExpressJs</h1>')
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: "My Shop", path: '/'});
});

module.exports = router;