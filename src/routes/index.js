import { Router } from "express";
import { exceptionHandler } from "../utils/httpUtils.js";
import employeeRouter from "./employeeRouter.js";

const router = Router();
router.use(employeeRouter);
router.use(exceptionHandler);

export default router;
