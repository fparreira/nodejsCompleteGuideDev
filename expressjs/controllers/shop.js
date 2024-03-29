const Product = require('../models/product');
const Order = require('../models/order');

// const products = [];

exports.getProducts = (req, res, next) => {

    // const products = Product.fetchAll();

    // Product.findAll()

    // Product.fetchAll()

    Product.find()
    .then(products => {

        // console.log(products);

        res.render('shop/products-list', {
            prods: products,
            pageTitle: "All Products",
            path: '/products',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true,
            isAuthenticated: req.session.isLoggedIn
        });
    })
    .catch(err => {
        console.log(err);
    });

    // Product.fetchAll()
    //     .then(([firstElement, secondElement]) => {
    //         res.render('shop/products-list', {
    //             prods: firstElement,
    //             pageTitle: "All Products",
    //             path: '/products',
    //             hasProducts: firstElement.length > 0,
    //             activeShop: true,
    //             productCSS: true
    //         });
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });

};

exports.getProduct = (req, res, next) => {

    const prodId = req.params.productId;

    // console.log(prodId);

    Product.findById(prodId)
        .then(result => {
            console.log(result);
            res.render('shop/product-detail', {
                product: result,
                pageTitle: "Product Detail",
                path: "/products",
                isAuthenticated: req.session.isLoggedIn
            });
        })
        .catch(err => {
            console.log(err);
        });

    // Product.findById(prodId)
    //     .then(([product]) => {
    //         console.log(product[0]);
    //         res.render('shop/product-detail', {
    //             product: product[0],
    //             pageTitle: "Product Detail",
    //             path: "/products",
    //         });
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });



    // res.redirect("/");

};

exports.getIndex = (req, res, next) => {

    // console.log(req.session.user);
    console.log(req.session);

    // Product.findAll()
    // Product.fetchAll()
    Product.find()
        .then(products => {
            res.render('shop/index', {
                prods: products,
                pageTitle: "Shop",
                path: '/',
                isAuthenticated: req.session.isLoggedIn
            });
        })
        .catch(err => {
            console.log(err);
        });

    // const products = Product.fetchAll();
    // Product.fetchAll()
    //     .then(([firstElement, secondElement]) => {
    //         res.render('shop/index', {
    //             prods: firstElement,
    //             pageTitle: "Shop",
    //             path: '/'
    //         });
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });

};

exports.getCart = (req, res, next) => {

    req.user
        .populate(['cart.items.productId'])
        .then(user => {

            // console.log(user.cart.items);

            const products = user.cart.items;

            res.render('shop/cart', {
                path: '/cart',
                pageTitle: "Your Cart",
                products: products,
                isAuthenticated: req.session.isLoggedIn
            });
        })
        .catch(err => {
            console.log(err);
        });

}

        // .then(cart => {
        //     // console.log(cart.getProducts());
        //     return cart.getProducts()
        //     .then(products => {
        //         res.render('shop/cart', {
        //             path: '/cart',
        //             pageTitle: "Your Cart",
        //             products: products
        //         });
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        // })
        // .catch(err => {
        //     console.log(err);
        // })



    // Cart.getCart(cart => {

    //     Product.fetchAll(products => {
    //         const cartProducts = [];
    //         for (product of products) {

    //             const cartProductData = cart.products.find(prod => prod.id === product.id);

    //             if (cartProductData) {
    //                 cartProducts.push({productData: product, qty: cartProductData.qty});
    //             }

    //         }
            
    //         res.render('shop/cart', {
    //             path: '/cart',
    //             pageTitle: "Your Cart",
    //             products: cartProducts
    //         });

    //     });

    // });

// };

exports.postCart = (req, res, next) => {

    const prodId = req.body.productId;

    Product.findById(prodId)
    .then(product => {
        return req.session.user.addToCart(product);
    })
    .then(result => {
        // console.log(result);
        res.redirect('/cart');
    })
    .catch(err => {
        console.log(err);
    })




    // let fetchedCart;
    // let newQuantity = 1;

    // req.user.getCart()
    // .then(cart => {

    //     fetchedCart = cart; // to access the cart object later

    //     // check if it's already on the cart
    //     return cart.getProducts({where: {id: prodId}})

    // })
    // .then(products => { // then of the return above (products on the cart)

    //     let product;

    //     if(products.length > 0){ // the product is already in the cart
    //         product = products[0]; // the product in the cart
    //     }

    //     if (product) { //check if the product is in the cart, otherwise this is undefined / false
            
    //         // the product is already in the cart

    //         const oldQuantity = product.cartItem.quantity;
    //         newQuantity = oldQuantity + 1;
            
    //         return product;
            
    //     }

    //     return Product.findByPk(prodId) // the product isn't in the cart yet

    // })
    // .then(product => {
    //     // add the product in the cart 
    //     return fetchedCart.addProduct(product, {
    //         through: {quantity: newQuantity}
    //     });
    // })
    // .then(() => {
    //     res.redirect('/cart');
    // })
    // .catch(err => {
    //     console.log(err);
    // });

    // Product.findById(prodId, (product) => {
    //     // console.log(product);
    //     Cart.addProduct(prodId, product.price);
    // })

    // // console.log(prodId);
    // res.redirect('/cart');

};

exports.postCartDeleteProduct = (req, res, next) => {

    const prodId = req.body.productId;

    //access to the cart
    req.user.removeFromCart(prodId)
    .then(result => {
        console.log(result);
        res.redirect("/cart");
    })
    .catch(err => {
        console.log(err);
    })
        // .then(cart =>{
            
        //     // find and return the product to destroy
        //     return cart.getProducts({where: {id: prodId}});

        // })
        // .then(products => {

        //     const product = products[0]; //access the product
        //     return product.cartItem.destroy(); // delete the product in the cart and return it

        // })
        // .then(result => {
        //     res.redirect("/cart");
        // })
        // .catch(err => {
        //     console.log(err);
        // })




    // Product.findById(prodId, (product) => {

    //     Cart.deleteProduct(prodId, product.price);

    //     res.redirect("/cart");

    // })

}

exports.postOrder = (req, res, next) => {

    req.session.user
        .populate(['cart.items.productId'])
        .then(user => {

            //will be used map() function because order model is different that products array below
            const products = user.cart.items.map(i => {
                //is used the spread operador "..." and the special mongoose word _doc to retrieve de full object, not only product ID
                return {quantity: i.quantity, product: {...i.productId._doc}};
            });

            const order = new Order({
        
                user: {
                    name: req.user.name,
                    userId: req.user //mongoose will catch the id automatically
                },

                products: products                
        
            });

            return order.save();

        })
        .then(result => {
            return req.user.clearCart();
        })
        .then(() => {
            res.redirect("/orders");
        })
        .catch(err => {
            console.log(err);
        });


    // variable created to use later, to access cart object
    // let fetchedCart;

    // req.user.addOrder()
    //     .then(result => {
    //         res.redirect("/orders");
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })

    
    // req.user.getCart()
    //     .then(cart => {
    //         fetchedCart = cart;
    //         return cart.getProducts();
    //     })
    //     .then(products => {
    //         return req.user.createOrder()
    //             .then(order => {

    //                 // products.map(i => {
    //                 //     console.log(i.title + ' - ' + i.cartItem.quantity);
    //                 // })                    

    //                 return order.addProducts(
    //                     products.map(product => {
    //                         product.orderItem = { quantity: product.cartItem.quantity };
    //                         return product;
    //                     })
    //                 );

    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             })
    //     })
    //     .then(result => {

    //         // empty the card after the products go to order
    //         return fetchedCart.setProducts(null);
            
    //     })
    //     .then(result => {
    //         res.redirect("/orders");
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })

};

exports.getOrders = (req, res, next) => {

    // req.user.getOrders({include: ['products']})

    Order.find({ "user.userId": req.session.user._id })
        .then(orders => {
        // console.log(orders);

        res.render('shop/orders', {
            path: '/orders',
            pageTitle: "Your Orders",
            orders: orders,
            isAuthenticated: req.session.isLoggedIn
        });

    })
    .catch(err => {
        console.log(err);
    });

};

exports.getCheckout = (req, res, next) => {

    res.render("shop/checkout", {
        path: "/checkout",
        pageTitle: "Checkout",
        isAuthenticated: req.session.isLoggedIn
    });

};