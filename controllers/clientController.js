const connectController = require("../controllers/connectController.js");

const pool = connectController.pool;


exports.getClients = function (req, res) {
    pool.query("SELECT * FROM Clients", function (err, clients) {
        if (err) return console.log(err);
        res.render("../Views/clients/clients.hbs", {
            Clients: clients
        });
    });
};




exports.addClient = function (req, res) {
    res.render("../views/clients/addClient.hbs");
};



exports.postAddClient = function (req, res) {
    if (!req.body) return res.sendStatus(400);

    const ClientId = req.body.clientId;
    const ClientName = req.body.clientName;
    const Email = req.body.email;
    const Phone = req.body.phone;
    console.log(123);

    pool.query("INSERT INTO Clients (clientId, clientName, email, phone) VALUES (?, ?, ?, ?)",
        [ClientId, ClientName, Email, Phone], function (err, client) {
            if (err) return console.log(err);

            console.log(client);

            res.redirect("/clients");
        });
};



exports.editClient = function (req, res) {
    const clientId = req.params.ClientId;
    pool.query("SELECT * FROM clients WHERE clientId=?", [clientId], function (err, clients) {
        if (err) return console.log(err);

        res.render("../Views/clients/editClient.hbs", {
            client: clients[0]
        });
    });
};




exports.postEditClient = function (req, res) {
    if (!req.body) return res.sendStatus(400);

    const ClientName = req.body.clientName;
    const Email = req.body.email;
    const Phone = req.body.phone;
    const ClientId = req.body.clientId;

    pool.query("UPDATE Clients SET clientName=?, email=?, phone=? WHERE clientId=?",
        [ClientName, Email, Phone, ClientId], function (err, client) {
            if (err) return console.log(err);

            res.redirect("/clients");
        });
};