const express = require('express');

const shopController = require('../controllers/shop');

// const adminData = require('./admin')

// const path = require('path');

// const rootDir = require('../utils/path');

// console.log(path);
// console.log(__dirname);
// console.log(__filename);

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);
// router.post('/products/delete', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct);

// router.get('/cart', shopController.getCart);
// router.post('/cart', shopController.postCart);
// router.post('/delete-cart-item', shopController.postCartDeleteProdut);

// router.post('/create-order', shopController.postOrder);
// router.get('/orders', shopController.getOrders);

// router.get('/checkout', shopController.getCheckout);

module.exports = router;