import { addLogService } from "../services/logService.js";

export const createLogs = async (req, res) => {
  try {
    const { action, incident_id, operator_id, description } = req.body;
    const result = await addLogService({
      action,
      incident_id,
      operator_id,
      description,
    });
    return res.status(201).json({
      success: true,
      message: "log created successfully",
      id: result.insertId,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "internal server error" });
  }
};
