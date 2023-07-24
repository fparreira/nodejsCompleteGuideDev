// module
const Sequelize = require('sequelize');

// instance
const sequelize = new Sequelize('nodecomplete', 'fernando', 'password', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;

// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'fernando',
//     password: 'password',
//     database: 'node_complete'    
// });

// module.exports = pool.promise();