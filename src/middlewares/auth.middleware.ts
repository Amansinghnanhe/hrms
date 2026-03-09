import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request,res: Response,next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    const error = new Error("No token provided");
    (error as any).statusCode = 401;
    return next(error);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded as any;
    next();
  } catch (err) {
    next(err); // JWT error automatically errorMiddleware me jayega
  }
};
