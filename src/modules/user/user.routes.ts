import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { roleMiddleware } from "../../middlewares/role.middleware";
import { getUsers, getUser, changeUserStatus } from "./user.controller";

const router = Router();

router.use(authMiddleware);
router.use(roleMiddleware(["ADMIN"]));

router.get("/", getUsers);
router.get("/:id", getUser);
router.patch("/:id/status", changeUserStatus);

export default router;
