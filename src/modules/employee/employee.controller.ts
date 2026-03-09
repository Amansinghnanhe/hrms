import {Request, Response, NextFunction} from "express";
import * as employeeService from "./employee.services";



export const createEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const employee = await employeeService.createEmployee(req.body);
       return  res.status(201).json({
            success: true,
            data: employee
        });
        
    } catch (error) {
        next(error)
        
    }
};
export const getEmployees = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const employees = await employeeService.getAllEmployees();
       return  res.json({
            success: true,
            data: employees
        });
        
    } catch (error) {
     next(error)
        
    }
};
export const getEmployee = async (req: Request<{ id: string }>, res: Response, next: NextFunction)=> {
    try {
        const {id} = req.params;
        const employee = await employeeService.getEmployeeById(id);
       return  res.json({
            success: true,
            data: employee
        });
        
    } catch (error) {
     next(error);
        
    }
};
export const getMyProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
          if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
        const employee = await employeeService.getEmployeeById(req.user!.id
);
       return  res.json({
            success: true,
            data: employee
        });
        
    } catch (error) {
       next(error);
        
    }
};

export const changeEmployeeStatus = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params as { id: string };
    const { status } = req.body;

    if (!["ACTIVE", "INACTIVE"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value"
      });
    }

    const employee = await employeeService.updateEmployeeStatus(
      id,
      status
    );

   return res.json({
      success: true,
      message: "Employee status updated",
      data: employee
    });
  } catch (error) {
    next(error);
  }
};

