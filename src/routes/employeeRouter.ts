import { Router } from "express";
import {
  deleteEmployee,
  getEmployee,
  getEmployeeNetSalary,
  getEmployees,
  getEmployeeVacation,
  insertEmployee,
  updateEmployee,
} from "../controllers/employeeController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import {
  employeeInsertSchema,
  employeeUpdateSchema,
} from "../schemas/employeeSchemas.js";

const employeeRouter = Router();
employeeRouter.get("/employees", getEmployees);
employeeRouter.get("/employees/:id", getEmployee);
employeeRouter.get("/employees/:id/net-salary", getEmployeeNetSalary);
employeeRouter.get("/employees/:id/vacation", getEmployeeVacation);
employeeRouter.post(
  "/employees",
  validateSchemaMiddleware(employeeInsertSchema),
  insertEmployee
);
employeeRouter.put(
  "/employees/:id",
  validateSchemaMiddleware(employeeUpdateSchema),
  updateEmployee
);
employeeRouter.delete("/employees/:id", deleteEmployee);
export default employeeRouter;
