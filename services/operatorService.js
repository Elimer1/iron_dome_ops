import { operatorRepo } from "../repositories/operatorRepository";

export const addOperatorService = async (operatorData) => {
  try {
    return await operatorRepo.create(operatorData);
  } catch (error) {
    throw new Error("Service Error:" + error.message);
  }
};
