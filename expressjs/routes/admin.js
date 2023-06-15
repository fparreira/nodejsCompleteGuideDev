const express = require('express');

const path = require('path');

const rootDir = require('../utils/path');

// console.log(rootDir);

const router = express.Router();

// /admin/add-product -> GET
router.get('/add-product', (req, res, next) => {
    // console.log('In middleware product!');
    // res.send('<form action="/admin/add-product" method="POST" ><input type="text" name="title"><button type="subtmit">send</button></form>')
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

});

// /admin/add-product -> POST
router.post('/add-product', (req,res, next) => {
    console.log(req.body);
    res.redirect("/");
});


module.exports = router;