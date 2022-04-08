import joi from "joi";

export const employeeInsertSchema = joi.object({
  fullName: joi.string().required(),
  birthDate: joi.date().required(),
  position: joi.string().required(),
  grossSalary: joi.number().required(),
});

export const employeeUpdateSchema = joi.object({
  fullName: joi.string(),
  birthDate: joi.date(),
  position: joi.string(),
  grossSalary: joi.number(),
});
