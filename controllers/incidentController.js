import { addIncidentService } from "../services/incidentService.js";

export const createIncident = async (req, res) => {
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
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "internal server error" });
  }
};
