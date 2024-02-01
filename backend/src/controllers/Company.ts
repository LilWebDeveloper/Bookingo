import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Company from "../models/Company";
import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/assets/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("picture");

const createCompany = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const company = new Company({
        _id: new mongoose.Types.ObjectId().toHexString(),
        name: req.body.name,
        picture: req.file?.filename,
        services: req.body.services,
        city: req.body.city,
        address: req.body.address,
        rate: req.body.rate,
        specialization: req.body.specialization,
      });
      res.json({ status: "Add company" });
      company.save();
    }
  });
};

const highRateCompanies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Company.find({ rate: { $gt: 3 } })
    .sort({ rate: -1 })
    .limit(5)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json({ status: err }));
};

const hairdressers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Company.find({ specialization: "Fryzjer" })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json({ status: err }));
};

const massages = async (req: Request, res: Response, next: NextFunction) => {
  Company.find({ specialization: "Masaż" })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json({ status: err }));
};

const beautySalons = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Company.find({ specialization: "Salon Kosmetyczny" })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json({ status: err }));
};

const findCompany = (req: Request, res: Response, next: NextFunction) => {
  const companyId = req.params.companyId;

  return Company.findById(companyId)
    .select("-__v")
    .then((company) =>
      company
        ? res.status(200).json({ company })
        : res.status(404).json({ message: "Order not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

export default {
  createCompany,
  highRateCompanies,
  hairdressers,
  massages,
  beautySalons,
  findCompany,
};
