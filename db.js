const express = require("express");
const util = require("util");
const mysql2 = require("mysql2");



var conn = mysql2.createConnection({
    host:'bqpty9r33vro6a5ehwsk-mysql.services.clever-cloud.com',
    user:'uzpvi6y5iukezz8x',
    password:'uzpvi6y5iukezz8x',
    database:'bqpty9r33vro6a5ehwsk'
    
});


var exe = util.promisify(conn.query).bind(conn);


module.exports = exe;
