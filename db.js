const mysql2 = require("mysql2");
const util = require("util");

const conn = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306
});

conn.connect((err) => {
  if (err) {
    console.error("❌ DB Connection Error:", err.message);
  } else {
    console.log("✅ Database Connected");
  }
});

const exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
