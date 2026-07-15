import { logsRepo } from "../repositories/logsRepository";

export const addLogService = async (logData) => {
  try {
    return await logsRepo.create(logData);
  } catch (error) {
    throw new Error("Service Error:" + error.message);
  }
};
