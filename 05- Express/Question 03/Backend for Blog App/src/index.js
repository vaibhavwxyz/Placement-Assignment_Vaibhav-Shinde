import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/blog", blogRoutes);

const port = 4000;

await mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
