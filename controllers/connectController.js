const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "dbairlines",
    password: "1234"
})

module.exports.pool = pool;

let cart = [];
let clientsList = [];

module.exports.cart = cart;
module.exports.clientsList = clientsList;

