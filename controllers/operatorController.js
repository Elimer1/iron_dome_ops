import { addOperatorService } from "../services/operatorService.js";

export const createOperator = async (req, res, next) => {
  try {
    const { name, soldier_rank } = req.body;
    const result = await addOperatorService({ name, soldier_rank });
    return res.status(201).json({
      success: true,
      message: "Operator created successfully",
      id: result.insertId,
    });
  } catch (error) {
    next(error);
  }
};
