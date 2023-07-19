const Product = require('../models/product');
const Cart = require('../models/cart');

// const products = [];

exports.getProducts = (req, res, next) => {

    // const products = Product.fetchAll();
    Product.fetchAll()
        .then(([firstElement, secondElement]) => {
            res.render('shop/products-list', {
                prods: firstElement,
                pageTitle: "All Products",
                path: '/products',
                hasProducts: firstElement.length > 0,
                activeShop: true,
                productCSS: true
            });
        })
        .catch(error => {
            console.log(error);
        });

};

exports.getProduct = (req, res, next) => {

    const prodId = req.params.productId;

    Product.findById(prodId)
        .then(([product]) => {
            console.log(product[0]);
            res.render('shop/product-detail', {
                product: product[0],
                pageTitle: "Product Detail",
                path: "/products",
            });
        })
        .catch(error => {
            console.log(error);
        });



    // res.redirect("/");

};

exports.getIndex = (req, res, next) => {

    // const products = Product.fetchAll();
    Product.fetchAll()
        .then(([firstElement, secondElement]) => {
            res.render('shop/index', {
                prods: firstElement,
                pageTitle: "Shop",
                path: '/'
            });
        })
        .catch(error => {
            console.log(error);
        });

};

exports.getCart = (req, res, next) => {

    Cart.getCart(cart => {

        Product.fetchAll(products => {
            const cartProducts = [];
            for (product of products) {

                const cartProductData = cart.products.find(prod => prod.id === product.id);

                if (cartProductData) {
                    cartProducts.push({productData: product, qty: cartProductData.qty});
                }

            }
            
            res.render('shop/cart', {
                path: '/cart',
                pageTitle: "Your Cart",
                products: cartProducts
            });

        });

    });



};

exports.postCart = (req, res, next) => {

    const prodId = req.body.productId;

    Product.findById(prodId, (product) => {
        // console.log(product);
        Cart.addProduct(prodId, product.price);
    })

    // console.log(prodId);
    res.redirect('/cart');

};

exports.postCartDeleteProdut = (req, res, next) => {

    const prodId = req.body.productId;

    Product.findById(prodId, (product) => {

        Cart.deleteProduct(prodId, product.price);

        res.redirect("/cart");

    })

    

}

exports.getOrders = (req, res, next) => {

    res.render('shop/orders', {
        path: '/orders',
        pageTitle: "Your Orders"
    });

};

exports.getCheckout = (req, res, next) => {

    res.render("shop/chegout", {
        path: "/checkout",
        pageTitle: "Checkout"
    });

};