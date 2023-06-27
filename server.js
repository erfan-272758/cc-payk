import "./loadEnv.js";
import mongoose from "mongoose";
import app from "./app.js";

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("DB Connected");
});

app.listen(process.env.PORT ?? 2758, () => {
  console.log(
    `Server Listening at http://127.0.0.1:${process.env.PORT ?? 2758}`
  );
});
