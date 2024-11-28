import express from "express";
import cors from "cors";
import router from "./routes/school.routes.js";
import helmet from "helmet";
const app = express();
app.use(
  cors({
    credentials: true,
  })
);
app.use(helmet());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/api", router);

export { app };
