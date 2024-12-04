const connectController = require("../controllers/connectController.js");

const pool = connectController.pool;

exports.addToCart = function (req, res) {
    const RouteId = req.params.RouteId;

    pool.query("SELECT * FROM routes WHERE routeid=?", [RouteId], function (err, route) {
        if (err) return console.log(err);

        connectController.cart.push(route[0]);

        res.redirect("/routes");
    });
};



exports.getCart = function (req, res) {
    const totalPrice = connectController.cart.reduce((total, route) => total + route.price, 0);
    pool.query("SELECT * FROM clients", function (err, clients) {
        if (err) return console.log(err);

        res.render("../views/sales/cart.hbs", {
            cartTickets: connectController.cart,
            totalPrice: totalPrice,
            Clients: clients
        });
    });
};


exports.cartToHistory = function (req, res) {
    const clientId = req.body.clientId;
    var date = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate()
        + ' ' + new Date().getHours() + ':' + new Date().getMinutes();

    connectController.cart.forEach(route => {
        pool.query("INSERT INTO tickets (STRcity, ARRcity, STRtime, ARRtime, price, clientId, routeId, purchaseDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [route.STRcity, route.ARRcity, route.STRtime, route.ARRtime, route.price, clientId, route.routeid, date], function (err) {
                if (err) console.log(err);
                pool.query("UPDATE routes SET seats=seats-1 WHERE routeId=?", [route.routeid]), function (err) {
                    if (err) console.log(err);
                }
            });
    });


    connectController.cart = [];

    res.redirect("/routes");
};



exports.getHistory = function (req, res) {

    const clientId = req.params.ClientId;
    pool.query("SELECT * FROM tickets WHERE clientId=?", [clientId], function (err, tickets) {
        if (err) return console.log(err);

        res.render("../views/sales/History.hbs", {
            Tickets: tickets
        });
    });
};