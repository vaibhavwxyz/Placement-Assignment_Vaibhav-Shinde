// const catchAsyncError =(req, res, next)=> {
//   Promise.resolve(catchAsyncError(req, res, next)).catch(next);
// };

import ErrorHandler from "../utils/errorHandler.js";

const catchAsyncError = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {

  // Wrong Mongodb Id Error
    if (err.name === "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`;
      err = new ErrorHandler(message, 400);
    }

    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};

export default catchAsyncError;
