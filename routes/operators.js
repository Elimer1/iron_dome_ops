import express from "express";
import { createOperator } from "../controllers/operatorController.js";

const router = express.Router();

router.post("/operators", createOperator);

export default router;
