import {
  createIncident,
  updateIncident,
  getIncident,
} from "../controllers/incidentController.js";
import express from "express";

const router = express.Router();

router.post("/", createIncident);
router.patch("/:id/status", updateIncident);
router.get("/open", getIncident);

export default router;
