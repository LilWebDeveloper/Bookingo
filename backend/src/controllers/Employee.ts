import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Employee from "../models/Employee";

const createEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const employee = new Employee({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    surname: req.body.surname,
    company: req.body.company,
  });

  return employee
    .save()
    .then((employee) => res.status(201).json({ employee }))
    .catch((error) => res.status(500).json({ error }));
};

const companyEmployees = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const companyId = req.params.companyId;
  return Employee.find({ company: `${companyId}` })
    .select("-__v")
    .then((employee) => res.status(200).json({ employee }))
    .catch((error) => res.status(500).json({ error }));
};

export default {
  createEmployee,
  companyEmployees,
};
