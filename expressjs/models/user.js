// module sequelize
const Sequelize = require('sequelize');  // to use on definition types of field

// conection 
const sequelize = require('../utils/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primarytKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;