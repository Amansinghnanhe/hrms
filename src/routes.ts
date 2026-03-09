import { Router } from "express";
import authRoutes from "./modules/auth/auth.routes";
import userRoutes from "./modules/user/user.routes";
import employeeRoutes from "./modules/employee/employee.routes";
import companyRoutes from "./modules/company/company.routes";
import attendanceRoutes from "./modules/attendance/attendance.routes";
import leaveRoutes from "./modules/leave/leave.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/employee",employeeRoutes);
router.use("/company", companyRoutes);
router.use("/attendance", attendanceRoutes);
router.use("/leave", leaveRoutes);



export default router;
