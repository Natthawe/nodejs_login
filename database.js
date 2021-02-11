const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "nodejs_login"
}).promise()

module.exports = dbConnection;