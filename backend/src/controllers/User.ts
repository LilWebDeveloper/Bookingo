import { NextFunction, Request, Response } from "express";
import Logging from "../library/Logging";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/User";
import signJWT from "../functions/SignJWT";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { login, password } = req.body;

  const passwordHashed = await bcrypt.hash(password, 10);

  const user = new User({
    _id: new mongoose.Types.ObjectId().toHexString(),
    login,
    password: passwordHashed,
  });

  setTimeout(() => {
    return user
      .save()
      .then((user) => res.status(201).json({ user }))
      .catch((error) => res.status(500).json({ error }));
  }, 2000);
};

const loginUser = (req: Request, res: Response, next: NextFunction) => {
  let { login, password } = req.body;

  const NAMESPACE = req.body.login;

  User.find({ login })
    .exec()
    .then((user) => {
      if (user.length !== 1) {
        return res.status(401).json({
          message: "Enter your login and password",
          status: 401,
        });
      }

      bcrypt.compare(
        password,
        user[0].password,
        (error, result) => {
          if (error) {
            Logging.error(`${NAMESPACE} ${error.message} ${error}`);

            return res.status(401).json({
              message: "Unauthorized",
            });
          } else if (result) {
            signJWT(user[0], (_error, token) => {
              if (error) {
                Logging.error(`${NAMESPACE} Unable to sign token: ${_error}`);

                return res.status(401).json({
                  message: "Unauthorized",
                  error: _error,
                });
              } else if (token) {
                return res.status(200).json({
                  token,
                  employeeId: user[0]._id,
                  name: user[0].login,
                  status: 200,
                  message: "Authorized",
                });
              }
            });
          } else {
            return res.status(401).json({
              message: "Wrong Password",
              status: 401,
            });
          }
        }
      );
    });
};

export default {
  createUser,
  loginUser
};
