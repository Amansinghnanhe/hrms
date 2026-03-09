import { Request, Response,NextFunction } from "express";
import * as userServices from  "./user.service";



export const getUsers = async (req: Request, res:Response, next: NextFunction) =>{
    try {
        const users = await userServices.getAllUser();
        res.json({
            success : true,
            data: users
        });
        
    } catch (error) {
        next(error); 
    }
        
    };
export const getUser = async (req: Request<{ id: string }>,res: Response,next: NextFunction) => {
  try {
    const userId = req.params.id;

    const user = await userServices.getUserById(userId);

    res.json({
      success: true,
      data: user
    });

  } catch (error) {
    next(error); 
  }
};

export const changeUserStatus = async (req:Request, res:Response, next: NextFunction) =>{
    try {
     const userId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const { status } = req.body;
    const user = await userServices.updateUserStatus(userId, status);
        res.json({
            success: true,
            data: user
        })
        
    } catch (error:any) {
     next(error); 
        
    };
}
