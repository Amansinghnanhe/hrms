import {Request, Response, NextFunction} from "express";
import * as companyService from "./company.service";
// import { nextTick } from "node:process";
// import { success } from "zod";

export const createCompany = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const company = await companyService.createCompany(req.body);

        return res.status(201).json({
            success: true,
            data: company,
        });
        
    } catch (error) {
        next(error);
    }
};
export const getAllCompanies = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const companies = await companyService.getAllCompanies();
        return res.json({
            success: true,
            data: companies,
        });
        
    } catch (error) {
        next(error);
        
    }
};
export const getCompany = async (req: Request<{id: string}>, res: Response, next: NextFunction) => {
    try {
        const company = await companyService.getCompanyById(req.params.id);
        return res.json({
            success: true,
            data: company,
        });
        
    } catch (error: any) {
      next(error);
        
    }
};
export const updateCompany = async (req: Request <{ id: string }>, res: Response, next:NextFunction) => {
    try {
        const company = await companyService.updateCompany(
            req.params.id,
            req.body
        );
        return res.json({
            success: true,
            data: company,

        });
    } catch (error) {
       next(error);
        
    }
};