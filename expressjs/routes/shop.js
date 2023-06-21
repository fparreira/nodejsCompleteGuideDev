const express = require('express');

const productsController = require('../controllers/products');

// const adminData = require('./admin')

// const path = require('path');

// const rootDir = require('../utils/path');

// console.log(path);
// console.log(__dirname);
// console.log(__filename);

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;