const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // console.log('In middleware product!');
    // res.send('<form action="/admin/add-product" method="POST" ><input type="text" name="title"><button type="subtmit">send</button></form>')
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('admin/add-product', {
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

    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, imageUrl, description, price);
    product.save();

    res.redirect("/");
}

exports.getProducts = (req, res, next) => {

    // const products = Product.fetchAll();
    Product.fetchAll((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: "Admin Products",
            path: '/admin/products'
        });
    });

}