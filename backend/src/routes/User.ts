import express from "express";
import controller from "../controllers/User";

const router = express.Router();

router.post("/add", controller.createUser);
router.post("/login", controller.loginUser);

export = router;