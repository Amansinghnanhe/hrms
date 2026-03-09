import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (err: any,req: Request,res: Response,next: NextFunction): void => {
  console.error("ERROR:", err);

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid token";
  }

  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Token expired";
  }
// mongoose db testing same mail dobara insert karo same unique field repeat ho
  if (err.code === 11000) {
    statusCode = 400;
    message = "Duplicate field value entered";
  }

  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((val: any) => val.message)
      .join(", ");
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};

export {};
