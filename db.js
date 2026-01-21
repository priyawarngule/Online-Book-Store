const express = require("express");
const util = require("util");
const mysql2 = require("mysql2");



var conn = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'Root',
    database:'online_book'
    
});


var exe = util.promisify(conn.query).bind(conn);


module.exports = exe;