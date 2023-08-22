const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {

    MongoClient.connect('mongodb+srv://fparreira:EjZrhi2gqj0ddvKL@cluster0.atmcgwv.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client => {
        console.log('connected!');
        _db = client.db();
        callback();
    })
    .catch(err => {
        console.log(err);
        throw err;
    })

}

const getDb = () => {

    if (_db) {
        return _db;
    } 
    
    throw 'No database found!';

}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;




// // module
// const Sequelize = require('sequelize');

// // instance
// const sequelize = new Sequelize('nodecomplete', 'root', 'root', {
//     dialect: 'mysql',
//     host: 'localhost'
// });

// module.exports = sequelize;

// // const mysql = require('mysql2');

// // const pool = mysql.createPool({
// //     host: 'localhost',
// //     user: 'fernando',
// //     password: 'password',
// //     database: 'node_complete'    
// // });

// // module.exports = pool.promise();