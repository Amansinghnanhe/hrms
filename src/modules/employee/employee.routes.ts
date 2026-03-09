import {Router}  from "express";
import { createEmployee, getEmployees,   getEmployee, getMyProfile , changeEmployeeStatus } from "./employee.controller";
import { roleMiddleware } from "../../middlewares/role.middleware";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware); 
// ye har par lga hoga esi liye maine ya esko pehle define kar diya hai ki baar baar na likhn apa

router.post("/",  roleMiddleware(["ADMIN", "HR"]), createEmployee);
router.get("/",  roleMiddleware(["ADMIN", "HR"]), getEmployees);
router.get("/:id", roleMiddleware(["ADMIN", "HR" ,"EMPLOYEE"]), getEmployee);
router.patch("/:id/status",roleMiddleware(["ADMIN"]), changeEmployeeStatus);
router.get("/me/profile", roleMiddleware(["EMPLOYEE"]), getMyProfile);


export default router;
