import express from "express";
import controller from "../controllers/Company";

const router = express.Router();

router.post("/add", controller.createCompany);
router.get("/highRate", controller.highRateCompanies);
router.get("/hairdressers", controller.hairdressers);
router.get("/massages", controller.massages);
router.get("/beautySalons", controller.beautySalons);
router.get("/:companyId", controller.findCompany);

export = router;
