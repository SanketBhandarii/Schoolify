import mysql from "mysql2";

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Ganesh",
  database: process.env.DB_NAME || "school_management",
});

export default db;
