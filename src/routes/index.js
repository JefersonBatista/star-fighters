import { Router } from "express";
import employeeRouter from "./employeeRouter.js";

const router = Router();
router.use(employeeRouter);

export default router;
