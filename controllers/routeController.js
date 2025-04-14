const connectController = require("../controllers/connectController.js");

const pool = connectController.pool;



exports.getRoutes = function (req, res) {
    pool.query("SELECT * FROM cities", function (err, cities) {
        if (err) return console.log(err);
        res.render("../Views/routes/Routes.hbs", {
            cartLen: connectController.cart.length,
            Cities: cities
        });
    });
};

exports.search = function (req, res) {
    const STRcity = req.body.STRcity;
    const ARRcity = req.body.ARRcity;
    let STRtime = req.body.STRtime;

    if (STRcity == 0 || ARRcity == 0 || STRtime == 0 || STRcity == undefined ||
        ARRcity == undefined || STRtime == undefined) {
        res.redirect("/routes");
        return;
    }

    STRtime = '%' + STRtime + '%';

    pool.query("SELECT * FROM ROUTES WHERE STRcity LIKE ? AND ARRcity like ? AND STRtime like ? AND seats!=0",
        [STRcity, ARRcity, STRtime], function (err, data) {
            if (err) return console.log(err);
            res.render("../Views/routes/Search.hbs", {
                Routes: data
            })
        });

}



exports.addRoute = function (req, res) {
    pool.query("SELECT * FROM cities", function (err, cities) {
        if (err) return console.log(err);
        res.render("../Views/routes/addRoute.hbs", {
            Cities: cities
        });
    });
};

exports.postAddRoute = function (req, res) {
    if (!req.body) return res.sendStatus(400);

    const STRcity = req.body.STRcity;
    const ARRcity = req.body.ARRcity;
    const STRtime = req.body.STRtime;
    const ARRtime = req.body.ARRtime;
    const seats = req.body.seats;
    const price = req.body.price;

    pool.query("INSERT INTO routes (STRcity, ARRcity, STRtime, ARRtime, seats, price) VALUES (?, ?, ?, ?, ?, ?)",
        [STRcity, ARRcity, STRtime, ARRtime, seats, price], function (err, data) {
            if (err) return console.log(err);
            res.redirect("/routes");
    });
 
};


exports.editRoute = function (req, res) {
    const RouteId = req.params.RouteId;
    pool.query("SELECT * FROM routes WHERE routeid=?", [RouteId], function (err, routes) {
        if (err) return console.log(err);
        pool.query("SELECT * FROM cities", function (err, cities) {
            if (err) return console.log(err);
            res.render("../Views/routes/editRoute.hbs", {
                routeId: RouteId,
                route: routes[0],
                Cities: cities
            });

        });
    });
};


exports.postEditRoute = function (req, res) {
    if (!req.body) return res.sendStatus(400);

    let queryRoute = "UPDATE routes SET "
    let queryParams = false;

    const STRcity = req.body.STRcity;
    const ARRcity = req.body.ARRcity;
    const STRtime = req.body.STRtime;
    const ARRtime = req.body.ARRtime;
    const seats = req.body.seats;
    const price = req.body.price;
    const RouteId = req.body.RouteId;

    if (STRcity != 0) {
        queryRoute += "STRcity=" + "'" + STRcity + "', ";
        queryParams = true;
    }
    if (ARRcity != 0) {
        queryRoute += "ARRcity=" + "'" + ARRcity + "', ";
        queryParams = true;
    }
    if (STRtime) {
        queryRoute += "STRtime=" + "'" + STRtime + "', ";
        queryParams = true;
    }
    if (ARRtime) {
        queryRoute += "ARRtime=" + "'" + ARRtime + "', ";
        queryParams = true;
    }
    if (seats) {
        queryRoute += "seats=" + seats + ", ";
        queryParams = true;
    }
    if (price) {
        queryRoute += "price=" + price + ", ";
        queryParams = true;
    }
    if (queryParams) {
        queryRoute = queryRoute.substr(0, queryRoute.length - 2);
        pool.query(queryRoute + " WHERE routeId=?",
            [RouteId], function (err, tovar) {
                if (err) return console.log(err);
                res.redirect("/routes");
            });
    }
    else {
        res.redirect("/routes");
    }
};


exports.deleteRoute = function (req, res) {
    const RouteId = req.params.RouteId;
    pool.query("DELETE FROM routes WHERE routeId=?", [RouteId], function (err, route) {
        if (err) return console.log(err);

        res.redirect("/routes");
    });
};

exports.buy = function (req, res) {
    const RouteId = req.params.RouteId;
    pool.query("SELECT * FROM clients", function (err, clients) {
        if (err) return console.log(err);
        pool.query("SELECT * FROM routes WHERE routeId=?", [RouteId], function (err, routes) {
            if (err) return console.log(err);
            console.log(RouteId);
            res.render("../Views/routes/buy.hbs", {
                Routes: routes,
                Clients: clients
            });
        });
    });
}