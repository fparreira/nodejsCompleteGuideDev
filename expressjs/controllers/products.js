const Product = require('../models/product');

// const products = [];

exports.getAddProduct = (req, res, next) => {
    // console.log('In middleware product!');
    // res.send('<form action="/admin/add-product" method="POST" ><input type="text" name="title"><button type="subtmit">send</button></form>')
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            formsCSS: true,
            productCSS: true,
            activeAddProduct: true
        });
}

exports.postAddProduct = (req, res, next) => {
    // console.log(req.body);
    // products.push({title : req.body.title});
    const product = new Product(req.body.title);
    product.save();

    res.redirect("/");
}

exports.getProducts = (req, res, next) => {
    // console.log('In the another middleware!');
    // res.send('<h1>Hello from ExpressJs</h1>')
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // const products = adminData.products;
    // res.render('shop', {prods: products, pageTitle: "My Shop", path: '/'});

    // const products = Product.fetchAll();
    Product.fetchAll((products) => {
        res.render('shop', {
            prods: products,
            pageTitle: "My Shop",
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });

    console.log('exports getProducts function that will be use on route');

    // res.render('shop', products);
}