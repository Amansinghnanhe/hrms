import { Router}from "express";
import { checkIn, checkout, getMyAttendance, getAllAttendance} from "./attendance.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { roleMiddleware } from "../../middlewares/role.middleware";


const router = Router();


router.use(authMiddleware);

router.post("/check-in", roleMiddleware(["Employee"]), checkIn);
router.post("/check_out", roleMiddleware(["Employee"]), checkout);
router.get("/me", roleMiddleware(["Employee"]), getMyAttendance);

router .get("/", roleMiddleware(["ADMIN"]), getAllAttendance);

export default router;


