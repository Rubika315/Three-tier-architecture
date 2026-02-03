const mysql = require("mysql2");

// Database connection
const db = mysql.createConnection({
  host: "task-db.cd4me4ya4pn5.ap-south-2.rds.amazonaws.com",
  user: "admin",
  password: "Task#312004",
  database: "taskdb",
  port: 3306
});

// Connect to database
db.connect((err) => {
  if (err) {
    console.error("❌  Database connection failed:", err);
    return;
  }
  console.log("✅  Connected to RDS MySQL Database");
});

module.exports = db;