import express from "express";
import controller from "../controllers/Reservation";
import extractJWT from "../middleware/ExtractJWT";

const router = express.Router();

router.post("/add", extractJWT, controller.createReservation);
router.get("/userReservation", extractJWT, controller.userReservation);
router.get("/company/:companyId", controller.companyReservation);

export = router;
