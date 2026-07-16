import { createIncident } from "../controllers/incidentController.js";
import express from "express";

const router = express.router();

router.post("/incidents", createIncident);
