const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false,
        isAuthenticated: req.session.isLoggedIn
    });
}

exports.postAddProduct = (req, res, next) => {
    // console.log(req.body);
    // products.push({title : req.body.title});

    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    // req.user.createProduct({ // createProduct special method is automatically created when the association User.hasMany(Product) is set
    //     title: title,
    //     imageUrl: imageUrl,
    //     price: price,
    //     description: description
    // })

    // console.log(req.user);

    const product = new Product({
        title: title,
        price: price,
        description: description,
        imageUrl: imageUrl,
        userId: req.session.user
    });

    // const product = new Product(title, price, description, imageUrl, null, req.user._id);

    product.save()
    .then(result => {
        console.log('product created');
        res.redirect('/admin/products');        
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

    // console.log(prodId);

    // req.user.getProducts({where: {id: prodId}}) // getProducts special method is automatically created when the association User.hasMany(Product) is set
    // Product.findByPk(prodId)
    Product.findById(prodId)
        .then(product => {

            // console.log(product);

            // const result = results[0];

            // if (!result) {
            //     return res.redirect("/");
            // }
            res.render('admin/edit-product', {
                    pageTitle: 'Edit Product',
                    path: '/admin/edit-product',
                    editing: editMode,
                    product: product,
                    isAuthenticated: req.session.isLoggedIn
                })
        })
        .catch(err => {
            console.log(err);
            return res.redirect("/");
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

    // const product = new Product(updatedTitle, updatedPrice, updatedDescription, updatedImageUrl, id);

    Product.findById(id)
    .then(product => {

        product.title = updatedTitle;
        product.price = updatedPrice;
        product.description = updatedDescription;
        product.imageUrl = updatedImageUrl;
        
        return product.save();

    })
    .then(result => {
        console.log("Updated product !");
        res.redirect("/admin/products");
    })
    .catch(err => {
        console.log(err);
    })


    // Product.findByPk(id)
    // product.save()
        // .then(resultProduct => {
        //     // resultProduct.title = updatedTitle;
        //     // resultProduct.imageUrl = updatedImageUrl;
        //     // resultProduct.description = updatedDescription;
        //     // resultProduct.price = updatedPrice;

        //     // return a promise
        //     return resultProduct.save();
        // })
        // .then(result => {
        //     console.log("Updated product !");
        //     res.redirect("/admin/products");
        // })
        // // catch errors from findByPk() and save() promises
        // .catch(err => {
        //     console.log(err);
        // });

    // const prod = new Product(id, title, imageUrl, description, price);
    // prod.save();
    

}

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;

    // Product.findByPk(prodId)
    // .then(productFound => {
    //     return productFound.destroy();
    // })
    // Product.deleteById(prodId)
    Product.findByIdAndRemove(prodId)
    .then(() => {
        res.redirect('/admin/products');
        console.log('product deleted');
    })
    .catch(err => { console.log(err); });

    // Product.deleteById(prodId);    
    // res.redirect("/admin/products");
}


exports.getProducts = (req, res, next) => {

    // req.user.getProducts() // getProducts special method is automatically created when the association User.hasMany(Product) is set
    // Product.findAll()
    // Product.fetchAll()
    Product.find()
        // .populate('userId') // retrieve the intire collection associated User
        .then(result => {
            // console.log(result);
            res.render('admin/products', {
                prods: result,
                pageTitle: "Admin Products",
                path: '/admin/products',
                isAuthenticated: req.session.isLoggedIn
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