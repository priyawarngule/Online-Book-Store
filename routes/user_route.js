const express = require('express');
const route = express.Router();
const exe = require("../db")

route.get('/', (req, res) => {
  res.render("user/home.ejs");
});

route.get('/about', (req, res) => {
  res.render("user/about.ejs");
});


route.get('/author', (req, res) => {
  res.render("user/author.ejs");
})

route.get('/gallery', (req, res) => {
res.render("user/gallery.ejs");
});

route.get('/contact', (req, res) => {
res.render("user/contact.ejs");
});

route.post("/save_form", function (req, res) {
    const d = req.body;
    const sql = `
        INSERT INTO enquiry 
        (name,email, mobile, book_name, author_name, message )
        VALUES (?, ?, ?, ?, ?, ? )
    `;
    exe( sql, [d.name, d.email,  d.mobile, d.book_name, d.author_name, d.message ],
    function (err, result) {
            if (err) {
                console.error(err);
                return res.status(500).send("Database Error");
            }
             res.redirect("/contact");
            })
        });
   
module.exports = route;


