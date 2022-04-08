import { Request, Response } from "express";
import { employeeService } from "../services/employeeService.js";

export async function getEmployees(req: Request, res: Response) {
  const employees = await employeeService.findAll();
  res.send(employees);
}

export async function getEmployee(req: Request, res: Response) {
  const { id } = req.params;

  const employee = await employeeService.findById(id);
  res.send(employee);
}

export async function getEmployeeNetSalary(req: Request, res: Response) {
  const { id } = req.params;

  const netSalaryWithTaxes = await employeeService.getNetSalaryWithTaxes(id);
  res.send(netSalaryWithTaxes);
}

export async function getEmployeeVacation(req: Request, res: Response) {
  const { id } = req.params;
  const { isSelling, startDate, vacationDaysAmount } = req.body;

  const vacation = await employeeService.calculateVacation(
    id,
    isSelling,
    startDate,
    vacationDaysAmount
  );
  res.send(vacation);
}

export async function insertEmployee(req: Request, res: Response) {
  const employee = req.body;

  await employeeService.insert(employee);
  res.sendStatus(201);
}

export async function updateEmployee(req: Request, res: Response) {
  const { id } = req.params;
  const employee = req.body;

  await employeeService.update(id, employee);
  res.sendStatus(200);
}

export async function deleteEmployee(req: Request, res: Response) {
  const { id } = req.params;

  await employeeService.remove(id);
  res.sendStatus(200);
}
