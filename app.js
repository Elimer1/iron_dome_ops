import express from "express";
import dotenv from "dotenv";
import operatorRouter from "./routes/operators.js";
import incidentRouter from "./routes/incidents.js";

dotenv.config();

const app = express();
app.use(express.json);

app.use("/operators", operatorRouter);
app.use("/incidents", incidentRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
