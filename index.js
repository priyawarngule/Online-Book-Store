var express = require("express");
var user_route = require("./routes/user_route")
var admin_route = require("./routes/admin_route")
var home_route = require("./routes/home_route")
var app = express();
app.use(express.static('public/'));

app.use(express.urlencoded({ extended: true }));


app.use("/",user_route);
app.use("/admin",admin_route);



app.use("/admin/home",home_route);

app.listen(3306);
