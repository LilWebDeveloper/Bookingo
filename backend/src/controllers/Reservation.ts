import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Reservation from "../models/Reservation";
import jwtDecode from "jwt-decode";

const createReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string = req.body.userId
  const decode: any = jwtDecode(token)

  const userId = decode.userId

  const reservation = new Reservation({
    _id: new mongoose.Types.ObjectId(),
    userId: userId,
    companyId: req.body.companyId,
    serviceId: req.body.serviceId,
    employeeId: req.body.employeeId,
    date: req.body.date,
  });

  return reservation
    .save()
    .then((reservation) => res.status(201).json({ reservation }))
    .catch((error) => res.status(500).json({ error }));
};

const userReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization!;
  const decode: any = jwtDecode(token)
  const userId = decode.userId

  return Reservation.find({ userId: `${userId}` })
    .populate("companyId")
    .populate("serviceId")
    .populate("employeeId")
    .select("-__v")
    .then((reservation) => res.status(200).json({ reservation }))
    .catch((error) => res.status(500).json({ error }));
};

const companyReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const companyId = req.params.companyId;

  return Reservation.find({ companyId: `${companyId}` })
    .select("-__v")
    .then((reservation) => res.status(200).json({ reservation }))
    .catch((error) => res.status(500).json({ error }));
};

export default {
  createReservation,
  userReservation,
  companyReservation,
};
