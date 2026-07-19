import {
  addIncidentService,
  updateIncidentService,
  getIncidentService,
} from "../services/incidentService.js";

export const createIncident = async (req, res, next) => {
  try {
    const { code_name, threat_level, status, operator_id } = req.body;
    const result = await addIncidentService({
      code_name,
      threat_level,
      status,
      operator_id,
    });
    return res.status(201).json({
      success: true,
      message: "Incident created successfully",
      id: result.insertId,
    });
  } catch (error) {
    next(error);
  }
};

export const updateIncident = async (req, res, next) => {
  try {
    const updateData = req.body;
    const id = req.params.id;
    const result = await updateIncidentService(updateData, id);
    return res
      .status(200)
      .json({ success: true, message: "incident updated successfully" });
  } catch (error) {
    next(error);
  }
};

export const getIncident = async (req, res, next) => {
  try {
    const incidentFilter = req.query;
    const result = await getIncidentService(incidentFilter);
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};
