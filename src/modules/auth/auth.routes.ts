import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { roleMiddleware } from "../../middlewares/role.middleware";
import { signup, login } from "./auth.controller";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);

// Example protected route
router.get("/protected", authMiddleware, roleMiddleware(["ADMIN"]), (req, res) => {
  res.json({ message: "Welcome Admin!", user: req.user });
});

export default router;
