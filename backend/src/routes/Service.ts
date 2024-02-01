import express from "express"
import controller from "../controllers/Service"

const router = express.Router();

router.post("/add", controller.createService);
router.get('/:companyId', controller.companyServices)

export = router