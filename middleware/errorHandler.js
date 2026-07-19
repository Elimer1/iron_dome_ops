export const errorHandler = async (err, req, res, next) => {
  console.error(err.message);
  return res
    .status(err.status || err.statusCode || 500)
    .json({ success: false, message: err.message || "internal server error" });
};
