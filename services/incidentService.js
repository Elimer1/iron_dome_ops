import { incidentRepo } from "../repositories/incidentRepository.js";

export const addIncidentService = async (incidentData) => {
  try {
    return await incidentRepo.create(incidentData);
  } catch (error) {
    throw new Error("Service Error:" + error.message);
  }
};

export const updateIncidentService = async (incidentData, incidentId) => {
  try {
    return await incidentRepo.update(incidentData, incidentId);
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
