import express from "express";
import controller from "../controllers/Employee";

const router = express.Router();

router.post("/add", controller.createEmployee);
router.get("/:companyId", controller.companyEmployees);

export = router;