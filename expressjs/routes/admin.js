const express = require('express');

const productsController = require('../controllers/products');

// const path = require('path');

// const rootDir = require('../utils/path');

// console.log(rootDir);

const router = express.Router();

// /admin/add-product -> GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product -> POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;