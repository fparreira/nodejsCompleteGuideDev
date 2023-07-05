const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'cart.json'
);


module.exports = class Cart{
    
    static addProduct(id, productPrice){

        // console.log(id + " - " + productPrice);

        // Fetch the previous cart
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };

            // console.log(cart);

            if (!err) {
                cart = JSON.parse(fileContent);
            }

            // console.log(cart);

            // Analyze the cart => Find existing the product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            // console.log(existingProductIndex);
            const existingProduct = cart.products[existingProductIndex];
            // console.log(existingProduct);
            
            let updatedProduct;
            // console.log(updatedProduct);

            // Add new product / increase quantity
            if (existingProduct) {

                updatedProduct = {...existingProduct} //spread operator
                updatedProduct.qty =  updatedProduct.qty + 1;
                // cart.products = [...cart.products, updatedProduct];
                // cart.products = [...updatedProduct];
                // console.log(cart.products[existingProductIndex]);                
                // console.log(cart.products[existingProductIndex].qty+1);
                // console.log(updatedProduct);
                // console.log(cart.products);
                cart.products = [...cart.products, updatedProduct];
            }
            else{
                updatedProduct = {id: id, qty: 1};
                cart.products = [...cart.products, updatedProduct];
            }

            cart.totalPrice = cart.totalPrice + productPrice;

            console.log(cart);

            // fs.writeFile(p, JSON.stringify(cart), (err) => {
            //     console.log(err + "no error, its ok");
            // });
        });

    }


}