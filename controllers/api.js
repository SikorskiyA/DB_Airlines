const connectController = require("../controllers/connectController.js");

const pool = connectController.pool;

exports.filterCities = function (req, res) {
    const countryCode = req.params.countryCode;

    pool.query("SELECT * FROM cities WHERE country like ?", [countryCode], function (err, cities){
        if (err) return console.log(err);
        res.json(cities);
    });
}