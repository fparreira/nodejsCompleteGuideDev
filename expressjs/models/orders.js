// sequelize module // used to type the fields
const Sequelize = require('sequelize');

// connection database // used to define table
const connection = require('../utils/database');

const Order = connection.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = Order;