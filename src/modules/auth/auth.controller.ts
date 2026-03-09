import {Request, Response, NextFunction} from "express";
import { signupService, loginService } from "./auth.service";


export const signup = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const data = await signupService(req.body);
       return  res.status(201).json({
            success: true,
            data,
        });
        

    } catch (error) {
      next(error); 
        
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await loginService(req.body.email, req.body.password);
         return res.status(200).json({
            success: true, 
            data,
        })
        
    } catch (error) {
     next(error);
        
    };
}