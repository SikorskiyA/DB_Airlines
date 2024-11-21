const mysql = require("mysql2");
const express = require("express");

const app = express();
const urlencodedParser = express.urlencoded({ extended: false });
app.use(express.static(__dirname + '/public'));

const pool = mysql.createPool({

    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "dbairlines",
    password: "1234"

});

app.set("view engine", "hbs");

app.get("/", function (req, res) {
    pool.query("SELECT * FROM routes", function (err, data) {

        if (err) return console.log(err);
        res.render("index.hbs", {
            route: data

        });
    });
});

app.get("/sort", function (req, res) {

    const start = req.query.start;
    const arrival = req.query.arrival;
    const date = req.query.date;

    pool.query("select * from routes where STRcity like ? and ARRcity like ? and STRtime like ?",
        [start, arrival, "%" + date + "%"], function (err, data) {

        if (err) return console.log(err);
        res.render("index.hbs", {
            route: data

        });
    });
});

//------------------------------------------------
app.listen(3000, function () {
    console.log("Server is ready to Connect...");
});
