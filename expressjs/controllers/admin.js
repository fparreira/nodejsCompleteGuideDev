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

    req.user.createProduct({ // createProduct special method is automatically created when the association User.hasMany(Product) is set
        title: title,
        imageUrl: imageUrl,
        price: price,
        description: description
    })
    .then(result => {
        res.redirect('/admin/products')
        console.log('product created');
    })
    .catch(err => {
        console.log(err);
    });

    // const product = new Product(null, title, imageUrl, description, price);
    // product.save().then(() => {
    //     res.redirect("/");
    // })
    // .catch(error => { console.log(error); });

}

exports.getEditProduct = (req, res, next) => {

    const editMode = req.query.edit;  

    if (!editMode) {
        return res.redirect("/");
    }

    const prodId = req.params.productId;

    req.user.getProducts({where: {id: prodId}}) // getProducts special method is automatically created when the association User.hasMany(Product) is set
    // Product.findByPk(prodId)
        .then(results => {

            console.log(results);

            const result = results[0];

            if (!result) {
                return res.redirect("/");
            }
            res.render('admin/edit-product', {
                    pageTitle: 'Edit Product',
                    path: '/admin/edit-product',
                    editing: editMode,
                    product: result
                })
        })
        .catch(err => {
            return res.redirect("/");
            console.log(err);
        })


    // Product.findById(prodId, (product) => {
    //     if (!product) {
    //         return res.redirect("/");
    //     }
    //     res.render('admin/edit-product', {
    //         pageTitle: 'Edit Product',
    //         path: '/admin/edit-product',
    //         editing: editMode,
    //         product: product
    //     });
    // });

}

exports.postEditProduct = (req, res, next) => {

    const id = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDescription = req.body.description;
    const updatedPrice = req.body.price;

    Product.findByPk(id)
        .then(resultProduct => {
            resultProduct.title = updatedTitle;
            resultProduct.imageUrl = updatedImageUrl;
            resultProduct.description = updatedDescription;
            resultProduct.price = updatedPrice;

            // return a promise
            return resultProduct.save();            
        })
        .then(result => {
            console.log("Updated product !");
            res.redirect("/admin/products");
        })
        // catch errors from findByPk() and save() promises
        .catch(err => {
            console.log(err);
        });

    // const prod = new Product(id, title, imageUrl, description, price);
    // prod.save();
    

}

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;

    Product.findByPk(prodId)
    .then(productFound => {
        return productFound.destroy();
    })
    .then(result => {
        res.redirect('/admin/products');
        console.log('product deleted');
    })
    .catch(err => { console.log(err); });

    // Product.deleteById(prodId);    
    // res.redirect("/admin/products");
}


exports.getProducts = (req, res, next) => {

    req.user.getProducts() // getProducts special method is automatically created when the association User.hasMany(Product) is set
    // Product.findAll()
        .then(result => {
            res.render('admin/products', {
                prods: result,
                pageTitle: "Admin Products",
                path: '/admin/products'
            });            
        })
        .catch(err => {
            console.log(err);
        });

    // const products = Product.fetchAll();
    // Product.fetchAll((products) => {
    //     res.render('admin/products', {
    //         prods: products,
    //         pageTitle: "Admin Products",
    //         path: '/admin/products'
    //     });
    // });

}