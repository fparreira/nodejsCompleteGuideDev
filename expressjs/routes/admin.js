const express = require('express');

const adminController = require('../controllers/admin');

// const path = require('path');

// const rootDir = require('../utils/path');

// console.log(rootDir);

const router = express.Router();

// /admin/add-product -> GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products -> POST
router.get('/products', adminController.getProducts);

// /admin/add-product -> POST
router.post('/add-product', adminController.postAddProduct);

// /admin/edit-product -> GET
router.get('/edit-product/:productId', adminController.getEditProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;