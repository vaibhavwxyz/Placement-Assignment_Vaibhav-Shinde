import ErrorHandler from "../utils/errorHandler.js";

export default function (err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong Mongodb Id Error
  // if (err.name === "CastError") {
  //   const message = `Resource not found. Invalid: ${err.path}`;
  //   err = new ErrorHandler(message, 400);
  // }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
}
