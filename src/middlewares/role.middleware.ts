import { Request, Response, NextFunction } from "express";

export const roleMiddleware = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;

    if (!userRole || !roles.includes(userRole)) {
      const error = new Error("Access denied");
      (error as any).statusCode = 403;
      return next(error);
    }

    next();
  };
};
