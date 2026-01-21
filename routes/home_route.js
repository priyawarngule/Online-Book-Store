var express = require("express");
var route = express.Router()
var session = require("express-session")
const exe = require("../db")


route.use(session({
  secret: "adminSecretKey",
  resave: false,
  saveUninitialized: true
}));


route.get('/', (req, res) => {
res.render("home/home.ejs");
});

// route.get("/add_slider", (req, res) => {
//   res.render("home/add_slider.ejs"); 
// });

module.exports = route;