import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import { router } from "./routes/review.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = 8080;

app.use("/user-review", router);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
