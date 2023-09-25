const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    products: [{
        product: {type: Object, required: true},
        quantity: {type: Number, required: true}
    }],

    user: {
        name: {type: String, required: true},
        userId: {type: Schema.Types.ObjectId, required: true, ref: 'User'}
    },

});

module.exports = mongoose.model('Order', orderSchema);


// sequelize module // used to type the fields
// const Sequelize = require('sequelize');

// connection database // used to define table
// const connection = require('../utils/database');

// const Order = connection.define('order', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     }
// });

// module.exports = Order;