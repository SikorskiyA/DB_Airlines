const mysql = require("mysql2");
const express = require("express");

const app = express();
const urlencodedParser = express.urlencoded({ extended: false });

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "mydb",
    password: "1234" // Пароль пользователя root  
});

app.set("view engine", "hbs");

//------------------------------------------------------------
// Получение списка пользователей
//------------------------------------------------------------
app.get("/", function (req, res) {
    pool.query("SELECT * FROM mytable", function (err, data) {
        if (err) return console.log(err);
        res.render("index.hbs", {
            person: data
        });
    });
});

//------------------------------------------------
app.listen(3000, function () {
    console.log("Server is ready to Connect...");
});
