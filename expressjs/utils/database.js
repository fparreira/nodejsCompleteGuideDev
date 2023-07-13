const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'fernando',
    password: 'password',
    database: 'node_complete'    
});

module.exports = pool.promise();