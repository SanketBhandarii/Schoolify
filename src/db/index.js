import { config } from "dotenv";
import mysql from "mysql2";

config({
  path: "././.env",
});

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port:3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "school_management",
});

export default db;
