const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
  insecureAuth: true,
});
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
module.exports = connection;
