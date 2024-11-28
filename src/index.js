import { config } from "dotenv";
import { app } from "./app.js";
import db from "./db/index.js";

config();

try {
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL Database:", err.message);
      process.exit(1);
    }
    console.log("Connected to MySQL Database");

    try {
      app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
      });
    } catch (serverErr) {
      console.error("Error starting the server:", serverErr.message);
      process.exit(1);
    }
  });
} catch (connectionErr) {
  console.error(
    "Unexpected error during database setup:",
    connectionErr.message
  );
  process.exit(1);
}
