var express = require("express");
var route = express.Router()
var session = require("express-session")
const exe = require("../db")

route.use(session({
  secret: "adminSecretKey",
  resave: false,
  saveUninitialized: true
}));

route.get("/",function(req,res){
         res.render("admin/login.ejs");
});


route.get("/register",function(req,res){
         res.render("admin/register.ejs");
});


route.post("/register", function (req, res) {
    const d = req.body;
    const sql = `
        INSERT INTO register 
        (name,email, mobile,password )
        VALUES (?, ?, ?, ?)
    `;
    exe( sql, [d.name, d.email,  d.mobile, d.password ],
    function (err, result) {
            if (err) {
                console.error(err);
                return res.status(500).send("Database Error");
            }
             res.redirect("/admin")
            })
        });

route.post("/save_login",function (req,res){
    const {email,password }=req.body;
const sql = "SELECT * FROM register WHERE email = ? AND password = ?";
  exe(sql, [email, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Database Error");
    }

    if (result.length === 0) {
      return res.send("Invalid Email or Password");
    };

    const user = result[0];
    // session set
    req.session.userId = user.id;
    req.session.email = user.email;
    res.redirect("/admin/dashboard");
  });
});




route.get("/dashboard", (req, res) => {
  const sql = "SELECT COUNT(*) AS total FROM enquiry";
  exe(sql,(err, result) => {
    if (err) {
      console.log("DB Error:", err);
      return res.send("Database Error");
    }
    const totalUsers = result.length > 0 ? result[0].total : 0;

    res.render("admin/dashboard.ejs", {
      "totalUsers": totalUsers
    });
  });
});


module.exports = route;