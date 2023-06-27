import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import coinRouter from "./src/coin/controller.js";

const app = express();

// use global middleware
app.use(bodyParser.json({ limit: "10kb" }));
app.use(morgan("dev"));

// routers
app.use(coinRouter);

export default app;
