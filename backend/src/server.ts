import express from "express";
import http from "http";
import mongoose from "mongoose";
import { config } from "./config/Config";
import Logging from "./library/Logging";
import CompanyRoutes from "./routes/Company";
import ServiceRoutes from "./routes/Service";
import EmployeeRoutes from "./routes/Employee";
import UserRoutes from "./routes/User";
import ReservationRoutes from "./routes/Reservation";

const router = express();

/** Connect to Mango */
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    Logging.info("Connected to mongoDB.");
    StartServer();
  })
  .catch((error) => {
    Logging.error("Unable to connect: ");
    Logging.error(error);
  });

/** Only start the server if Mongo Connects */
const StartServer = () => {
  router.use((req, res, next) => {
    /** Log the Request */
    Logging.info(
      `Incomming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );

    res.on("finish", () => {
      Logging.info(
        `Incomming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
      );
    });

    next();
  });

  router.use(express.urlencoded({ extended: true }));
  router.use(express.json());

  /** Rules of our API */
  router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method == "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      return res.status(200).json({});
    }

    next();
  });

  /** Routes */
  router.use("/company", CompanyRoutes);
  router.use("/service", ServiceRoutes);
  router.use("/employee", EmployeeRoutes);
  router.use("/user", UserRoutes);
  router.use("/reservation", ReservationRoutes)

  /** Healthcheck */
  router.get("/ping", (req, res, next) =>
    res.status(200).json({ message: "pong" })
  );

  /** Error handling */
  router.use((req, res, next) => {
    const error = new Error("not found");
    Logging.error(error);

    return res.status(404).json({ message: error.message });
  });

  http
    .createServer(router)
    .listen(config.server.port, () =>
      Logging.info(`Server is running on port ${config.server.port}`)
    );
};
