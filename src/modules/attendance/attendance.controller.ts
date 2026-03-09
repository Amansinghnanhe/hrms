import {Request, Response, NextFunction} from "express";
import * as attendanceService from  "./attendance.service";
// import { success } from "zod";
// import { asyncWrapProviders } from "node:async_hooks";

export const checkIn = async ( req: any,res: Response,next: NextFunction) =>{
    try {
        const attendance = await attendanceService.checkIn(
            req.user.employeeId
        );
        return res.json({
            success: true,
            data: attendance,
        });
        
    } catch (error) {
        next(error);
        
    }
};
export  const checkout = async (
    req:any,
    res: Response,
    next: NextFunction
) =>{
    try {
        const attendance = await attendanceService.checkOut(
            req.user.employeeId
        );
        return res.json({
            success: true,
            data: attendance,
        });
        
    } catch (error) {
        next(error);
        
    }
};

export const getMyAttendance = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
      const data = await attendanceService.getAllAttendance();

    return res.json({
        success: true,
        data,
    })
        
    } catch (error) {
        next(error);
        
    }
  
};
export const getAllAttendance = async (
    req: Request,
    res: Response,
    next: NextFunction
    
) =>{
    try {
        const data = await attendanceService.getAllAttendance();
        return res.json({
            success: true,
            data,
        });
        
    } catch (error) {
        next(error);
        
    }
};