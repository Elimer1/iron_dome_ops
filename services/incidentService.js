import { incidentRepo } from "../repositories/incidentRepository.js";
import { logsRepo } from "../repositories/logsRepository.js";
import { operatorRepo } from "../repositories/operatorRepository.js";

export const addIncidentService = async (incidentData) => {
  try {
    const result = await incidentRepo.create(incidentData);
    const newId = result.insertId;

    await logsRepo.create({
      action: "INCIDENT_CREATED",
      incident_id: newId,
      operator_id: incidentData.operator_id,
      description: "NEW INCIDENT CREATED",
    });
    return result;
  } catch (error) {
    throw new Error("Service Error:" + error.message);
  }
};

export const updateIncidentService = async (incidentData, incidentId) => {
  try {
    const oldIncident = await incidentRepo.get({ id: incidentId });
    if (!oldIncident || !oldIncident.length) {
      const error = new Error("Incident not found");
      error.statusCode = 404;
      throw error;
    }
    const oldOpId = oldIncident[0].operator_id;

    const validStatuses = ["open", "in-progress", "closed"];
    if (incidentData.status && !validStatuses.includes(incidentData.status)) {
      const error = new Error("invalid status provided");
      error.statusCode = 404;
      throw error;
    }

    const result = await incidentRepo.update(incidentData, incidentId);
    await logsRepo.create({
      action: "INCIDENT_UPDATED",
      incident_id: incidentId,
      operator_id: oldOpId,
      description: "INCIDENT UPDATED",
    });

    return result;
  } catch (error) {
    throw error;
  }
};

export const getIncidentService = async (incidentFilterData) => {
  try {
    return await incidentRepo.get(incidentFilterData);
  } catch (error) {
    throw new Error("service error:" + error.message);
  }
};
