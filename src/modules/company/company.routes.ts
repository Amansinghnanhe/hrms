import { Router } from "express";
import {createCompany, getAllCompanies, getCompany, updateCompany} from "./company.controllers"
import { authMiddleware } from "../../middlewares/auth.middleware";
import { roleMiddleware } from "../../middlewares/role.middleware";


const router = Router();
router.use(authMiddleware);


router.post("/", roleMiddleware(["ADMIN"]),createCompany );
router.get("/", roleMiddleware(["ADMIN"]),getAllCompanies );
router.get("/:id", roleMiddleware(["ADMIN"]),getCompany );
router.patch("/:id", roleMiddleware(["ADMIN"]),updateCompany );


export default router;