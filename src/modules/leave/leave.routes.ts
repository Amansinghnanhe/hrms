import { Router } from "express";
import {applyLeave,getMyLeaves, getAllLeaves, updateLeaveStatus } from "./leave.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { roleMiddleware } from "../../middlewares/role.middleware";


const router = Router();


router.use(authMiddleware);

router.post("/", roleMiddleware(["Employee"]), applyLeave);
router.get("/", roleMiddleware(["Employee"]), getMyLeaves);
// Admin

router.get("/", roleMiddleware(["Employee"]), getAllLeaves);
router.patch("/:id/status", roleMiddleware(["Employee"]), updateLeaveStatus);

export default router;
