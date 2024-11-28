import express from "express";
import cors from "cors";
import router from "./routes/school.routes.js";
const app = express();
app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/api", router);

export { app };
