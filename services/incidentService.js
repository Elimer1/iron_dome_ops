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
    const [result] = await incidentRepo.update(incidentData, incidentId);

    await logsRepo.create({
      action: "INCIDENT_UPDATED",
      incident_id: incidentId,
      operator_id: incidentData.operator_id,
      description: "INCIDENT UPDATED",
    });

    return result;
  } catch (error) {
    throw new Error("Service error:" + error.message);
  }
};

export const getIncidentService = async (incidentFilterData) => {
  try {
    return await incidentRepo.get(incidentFilterData);
  } catch (error) {
    throw new Error("service error:" + error.message);
  }
};
