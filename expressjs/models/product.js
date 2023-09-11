// import mongoose
const mongoose = require('mongoose');

// import mongoose scheema module
const Schema = mongoose.Schema;

// create product schema
const productSchema = new Schema({
    // title: String
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.ObjectId,
        ref: 'User', // name of the model exported
        required: true
    }

});

module.exports = mongoose.model('Product', productSchema);




//////////////////////////////////////////////////////////////////////////////////////////////

// // const Sequelize = require('sequelize');

// // const sequelize = require('../utils/database');

// const mongodb = require('mongodb');

// const getDb = require('../utils/database').getDb;

// class Product {

//     constructor(title, price, description, imageUrl, id, userId){
//         this.title = title;
//         this.price = price;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this._id = id ? new mongodb.ObjectId(id) : null;
//         this.userId = userId;
//     }

//     save() {

//         const db = getDb();
//         let debOp;

//         if (this._id) {
//             // update the product
//             debOp = db.collection('products').updateOne({_id: this._id}, {$set: this});

//         }else{
//             // create a new product
//             debOp = db.collection('products').insertOne(this);

//         }

//         return debOp
//         .then(result => {
//             console.log(result);
//         })
//         .catch(err => {
//             console.log(err);
//         });
//     }

//     static fetchAll(){

//         // access to the database
//         const db = getDb();
        
//         // use toArray just for few documents (registers)
//         return db.collection('products').find().toArray()
//         .then(products => {
//             // console.log(products);
//             return products;
//         })
//         .catch(err => {
//             console.log(err);
//         });

//     }

//     static findById(prodId){

//         const db = getDb();

//         return db.collection('products').find({ _id: new mongodb.ObjectId(prodId) }).next()
//         .then(product => {
//             // console.log(product);
//             // console.log('inside product model' + product);
//             return product;
//         })
//         .catch(err => {
//             console.log(err);
//         });

//     }

//     static deleteById(prodId){

//         const db = getDb();
//         return db.collection('products').deleteOne({_id: new mongodb.ObjectId(prodId)})
//         .then(result => {
//             console.log('Deleted');
//         })
//         .catch(err => {
//             console.log(err);
//         })

//     }


// }


// // const Product = sequelize.define('product', {
// //     id: {
// //         type: Sequelize.INTEGER,
// //         autoIncrement: true,
// //         allowNull: false,
// //         primaryKey: true
// //     }, 
// //     title: Sequelize.STRING,
// //     price: {
// //         type: Sequelize.FLOAT,
// //         allowNull: false
// //     },
// //     imageUrl: {
// //         type: Sequelize.STRING,
// //         allowNull: false
// //     },
// //     description: {
// //         type: Sequelize.TEXT,
// //         allowNull: false
// //     }

// // });

// module.exports = Product;


// // const db = require(../utils/database');

// // // const products = [];
// // // const fs = require('fs');
// // // const path = require('path');
// // const Cart = require('../models/cart');

// // // const p = path.join(
// // //     path.dirname(require.main.filename),
// // //     'data',
// // //     'products.json'
// // // );


// // // const getProductsFromFile = (callback) => {
  
// // //     fs.readFile(p, (err, fileContent) => {
// // //         if (err) {
// // //             callback([]);
// // //         }
// // //         else{
// // //             callback(JSON.parse(fileContent));
// // //         }
// // //     });    
// // // }

// // module.exports = class Product {
// //     constructor(id, title, imageUrl, description, price){
// //         this.id = id;
// //         this.title = title;
// //         this.imageUrl = imageUrl;
// //         this.description = description;
// //         this.price = price;
// //     }

// //     save(){

// //         return db.execute('insert into products (title, price, description, imageUrl) values (?, ?, ?, ?)',
// //             [this.title, this.price, this.description, this.imageUrl]
// //         );
    
// //         // getProductsFromFile((products) => {

// //         //     if (this.id) {
// //         //         const existingProductIndex = products.findIndex(prod => prod.id === this.id);
// //         //         const updatedProducts = [...products];
// //         //         updatedProducts[existingProductIndex] = this;
// //         //         fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
// //         //             console.log(err);
// //         //         });
// //         //     }else{
// //         //         this.id = Math.random().toString();
// //         //         products.push(this);            
    
// //         //         fs.writeFile(p, JSON.stringify(products), (err) => {
// //         //             console.log(err);
// //         //         });
// //         //     }

// //         // });

// //     }

// //     static deleteById(id){

// //         // getProductsFromFile((products) => {
            
// //         //     const product = products.find(prod => prod.id === id);
            
// //         //     const updatedProducts = products.filter(prod => prod.id !== id);
// //         //     fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
// //         //         if (!err) {
// //         //             Cart.deleteProduct(id, product.price);
// //         //         }
// //         //     });

// //         // });
        
// //     }

// //     static fetchAll(){
// //         // getProductsFromFile(cb);

// //         return db.execute("select * from products");

// //     }

// //     static findById(id){

// //         return db.execute('select * from products p where p.id = ?', [id]);

// //         // getProductsFromFile((products) => {            
// //         //     const product = products.find(p => p.id === id);
// //         //     callback(product);
// //         // });

// //     }

// // }
