
const mongodb = require('mongodb');
const getDb = require('../utils/database').getDb;

const ObjectId = mongodb.ObjectId;

class User{

    constructor(username, email, cart, id){
        this.name = username;
        this.email = email;
        this.cart = cart; // {items: []}
        this._id = id;
    }

    save(){

        const db = getDb();

        return db.collection('users').insertOne(this);

    }

    addToCart(product){

        const cartProductIndex = this.cart.items.findIndex(cp => {
            return cp.productId.toString() === product._id.toString();
        });

        let newQuantity = 1;
        const updatedCartItems = [...this.cart.items];

        if(cartProductIndex >= 0){ // the product already exists in the cart
            newQuantity = this.cart.items[cartProductIndex].quantity + 1;
            updatedCartItems[cartProductIndex].quantity = newQuantity;
        }
        else{ // the product don't existes in the cart
            updatedCartItems.push({productId: new ObjectId(product._id), quantity: newQuantity});
        }


        const updatedCart = {items: updatedCartItems};
        const db = getDb();

        return db.collection('users').updateOne({_id: new ObjectId(this._id)}, {$set: {cart: updatedCart}} )
        .then()
        .catch(err => {
            console.log(err);
        })

    }

    getCart(){

        const db = getDb();

        const productIds = this.cart.items.map(i => { return i.productId });

        return db.collection('products').find({ _id: {$in: productIds} }).toArray()
            .then(products => {
                return products.map(p => {
                    return {
                        ...p,
                        quantity: this.cart.items.find(i => { return i.productId.toString() === p._id.toString();}).quantity
                    }
                });
            });

    }

    static findById(userId){

        const db = getDb();

        return db.collection('users').findOne({_id: new ObjectId(userId)});

    }

}

module.exports = User;


// // module sequelize
// const Sequelize = require('sequelize');  // to use on definition types of field

// // conection 
// const sequelize = require('../utils/database');

// const User = sequelize.define('user', {
//     id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     email: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

// module.exports = User;