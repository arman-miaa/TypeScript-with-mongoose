import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); 

  // send error to client
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: err.message, 
    stack: err.stack,  
  });
};

export default globalErrorHandler;
