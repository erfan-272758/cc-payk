import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";

const app = express();

// use global middleware
app.use(bodyParser.json({ limit: "10kb" }));
app.use(morgan("dev"));

export default app;
