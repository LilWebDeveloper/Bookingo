import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Service from "../models/Service";

const createService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const service = new Service({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    time: req.body.time,
    price: req.body.price,
    company: req.body.company,
  });

  return service
    .save()
    .then((service) => res.status(201).json({ service }))
    .catch((error) => res.status(500).json({ error }));
};

const companyServices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const companyId = req.params.companyId;
  return Service.find({ company: `${companyId}` })
    .populate("company")
    .select("-__v")
    .then((service) => res.status(200).json({ service }))
    .catch((error) => res.status(500).json({ error }));
};

export default {
  createService,
  companyServices
};
