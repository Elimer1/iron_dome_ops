import { addOperatorService } from "../services/operatorService.js";

export const createOperator = async (req, res) => {
  d;
  try {
    const { name, rank } = req.body;
    const result = await addOperatorService({ name, rank });
    return res.status(201).json({
      success: true,
      message: "Operator created successfully",
      id: result.insertId,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "internal server error" });
  }
};
