const express = require("express");
const app = express();


app.set("view engine", "hbs");
const urlencodedParser = express.urlencoded({ extended: false });


const homeRouter = require("./routes/homeRouter.js");
const routeRouter = require("./routes/routeRouter.js");
const clientRouter = require("./routes/clientRouter.js");

const saleRouter = require("./routes/saleRouter.js");

app.use("/routes", urlencodedParser, routeRouter);
app.use("/clients", urlencodedParser, clientRouter);

app.use("/sales", urlencodedParser, saleRouter);

app.use("/", homeRouter);


app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

console.log("Server is ready to Connect...!")
app.listen(3000);
