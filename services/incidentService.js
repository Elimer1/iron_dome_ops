import { incidentRepo } from "../repositories/incidentRepository";

export const addIncidentService = async (incidentData) => {
  try {
    return await incidentRepo.create(incidentData);
  } catch (error) {
    throw new Error("Service Error:" + error.message);
  }
};
