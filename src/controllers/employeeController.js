import { employeeService } from "../services/employeeService.js";

export async function getEmployees(req, res) {
  const employees = await employeeService.findAll();
  res.send(employees);
}

export async function getEmployee(req, res) {
  const { id } = req.params;

  const employee = await employeeService.findById(id);
  res.send(employee);
}

export async function getEmployeeNetSalary(req, res) {
  const { id } = req.params;

  const netSalaryWithTaxes = await employeeService.getNetSalaryWithTaxes(id);
  res.send(netSalaryWithTaxes);
}

export async function insertEmployee(req, res) {
  const employee = req.body;

  await employeeService.insert(employee);
  res.sendStatus(201);
}

export async function updateEmployee(req, res) {
  const { id } = req.params;
  const employee = req.body;

  await employeeService.update(id, employee);
  res.sendStatus(200);
}

export async function deleteEmployee(req, res) {
  const { id } = req.params;

  await employeeService.remove(id);
  res.sendStatus(200);
}
