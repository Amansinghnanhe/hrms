import { Request, Response, NextFunction } from "express";
import * as leaveService from "./leave.service";
import { success } from "zod";

export const applyLeave = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
        const leave = await leaveService.applyLeave(
            req.user.employeeId,
            req.body
        );
        return res.status(201).json({
            success: true,
            data: leave
        });
        
    } catch (error) {
        next(error);
        
    }
};
export const getMyLeaves = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
        const leaves = await leaveService.getMyLeaves (
            req.user.employeeId
        );
        return res.json({

            success: true,
            data: leaves,

        });
        
    } catch (error) {
        next(error);
        
    }
};
export const getAllLeaves = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const leaves = await leaveService.getAllLeaves();
        return res.json({
            success: true,
            data: leaves,
        });
        
    } catch (error) {
        next(error);
        
    }
};
export const updateLeaveStatus = async (
    req: Request<{id: string}>,
    res: Response,
    next: NextFunction
) => {
    try {
        const leave = await leaveService.updateLeaveStatus(
            req.params.id,
            req.body.status
        );
        return res.json({
            success: true,
            data: leave,
        });
        
    } catch (error) {
        next(error);
        
    }
};