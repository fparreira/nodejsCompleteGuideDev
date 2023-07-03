const Product = require('../models/product');

// const products = [];


exports.getProducts = (req, res, next) => {
    // console.log('In the another middleware!');
    // res.send('<h1>Hello from ExpressJs</h1>')
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // const products = adminData.products;
    // res.render('shop', {prods: products, pageTitle: "My Shop", path: '/'});

    // const products = Product.fetchAll();
    Product.fetchAll((products) => {
        res.render('shop/products-list', {
            prods: products,
            pageTitle: "All Products",
            path: '/products',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });

    console.log('exports getProducts function that will be use on route');

    // res.render('shop', products);
}

exports.getIndex = (req, res, next) => {


    // const products = Product.fetchAll();
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: "Shop",
            path: '/'
        });
    });

}

exports.getCart = (req, res, next) => {

    res.render('shop/cart', {
        path: '/cart',
        pageTitle: "Your Cart"
    });

}

exports.getOrders = (req, res, next) => {

    res.render('shop/orders', {
        path: '/orders',
        pageTitle: "Your Orders"
    });

}

exports.getCheckout = (req, res, next) => {

    res.render("shop/chegout", {
        path: "/checkout",
        pageTitle: "Checkout"
    });

}