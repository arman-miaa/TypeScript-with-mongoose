"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    console.error(err.stack);
    // send error to client
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: err.message,
        stack: err.stack,
    });
};
exports.default = globalErrorHandler;
