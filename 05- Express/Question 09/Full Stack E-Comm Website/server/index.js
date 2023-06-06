import app from "./app.js";
import mongoose from "mongoose";
import "dotenv/config";

// Handling Uncaught Exception
process.on("uncaughtException", err => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");

  process.exit(1)
})

const port = process.env.PORT || 4000;

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log(`Mongodb connected with server ${data.connection.host}`);
  });

const server = app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
