const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
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

exports.getEditProduct = (req, res, next) => {

    const productId = req.params.productId;
    const editMode = req.query.editMode;

    console.log(productId + ' - ' + editMode);

    // res.render('admin/edit-product/', {
    //     pageTitle: 'Edit Product',
    //     path: '/admin/edit-product',
    //     editing: true
    // });
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