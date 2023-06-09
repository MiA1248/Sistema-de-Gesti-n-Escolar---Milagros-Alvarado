const mysql = require('mysql2');
const config = require('./../config');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password o ""',
    database: 'nombre_de_base_de_datos'
});

module.exports = pool.promise();