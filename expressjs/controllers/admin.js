const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    });
}

exports.postAddProduct = (req, res, next) => {
    // console.log(req.body);
    // products.push({title : req.body.title});

    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(null, title, imageUrl, description, price);
    product.save();

    res.redirect("/");
}

exports.getEditProduct = (req, res, next) => {

    const editMode = req.query.edit;  

    if (!editMode) {
        return res.redirect("/");
    }

    const prodId = req.params.productId;

    Product.findById(prodId, (product) => {
        if (!product) {
            return res.redirect("/");
        }
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        });
    });

}

exports.postEditProduct = (req, res, next) => {

    const id = req.body.productId;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;

    const prod = new Product(id, title, imageUrl, description, price);
    prod.save();
    res.redirect("/admin/products");

}

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;

    Product.deleteById(prodId);
    
    res.redirect("/admin/products");
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