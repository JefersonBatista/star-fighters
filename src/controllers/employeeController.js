import dayjs from "dayjs";
import { employeesRepository } from "../repositories/employeesRepository.js";

function formatEmployee(employee) {
  const birthDate = dayjs(employee.birthDate).format("DD/MM/YYYY");
  const dateJoined = dayjs(employee.dateJoined).format("DD/MM/YYYY");
  return { ...employee, birthDate, dateJoined };
}

export async function getEmployees(req, res) {
  try {
    const employees = await employeesRepository.findAll();
    res.send(employees.map((employee) => formatEmployee(employee)));
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function getEmployee(req, res) {
  const { id } = req.params;

  try {
    const employee = await employeesRepository.findById(id);
    if (!employee) {
      return res.sendStatus(404);
    }

    res.send(formatEmployee(employee));
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function insertEmployee(req, res) {
  const employee = req.body;

  try {
    const salaryInCents = employee.grossSalary * 100;
    await employeesRepository.insert({
      ...employee,
      grossSalary: salaryInCents,
    });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function updateEmployee(req, res) {
  const { id } = req.params;
  const employee = req.body;

  try {
    const formattedEmployee = { ...employee };
    if (formattedEmployee.grossSalary) {
      formattedEmployee.grossSalary = formattedEmployee.grossSalary * 100;
    }

    await employeesRepository.update(id, formattedEmployee);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function deleteEmployee(req, res) {
  const { id } = req.params;

  try {
    await employeesRepository.remove(id);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
