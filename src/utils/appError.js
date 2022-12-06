// Custom Error class

// Config
const configs = require("../../configs");

// App Error
const AppError = function (message, statusCode) {
    Error.call(this, message);
    this.message = message;
    this.statusCode = statusCode;
    this.status = `${this.statusCode}`.startsWith("4") ? "FAIL" : "ERROR";
    this.isOperational = true;
  
    // Capture Error Stack for Development Purpose
    Error.captureStackTrace(this, this.constructor);
};



// Global Error Handler
const geh = (err, req, res, next) => {
  err.status = err.status || "ERROR";
  err.statusCode = err.statusCode || 500;

  // Casting error
  if (err.name === "CastError") {
    const message = `Resource not found`;
    err = new AppError(message, 404);
  }


  // Send error for Dev production
  if (configs.env === "production") {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      error: err,
      errorStack: err.stack,
    });
  }

};

// Export GEH
module.exports.geh = geh;

module.exports.AppError = AppError;