import express from "express";
import cors from "cors";
import cardRouter from "./routes/cardRoute";

const app = express();


// Middlewere
app.use(cors());
app.use(express.json());


app.use("/api/card", cardRouter)

export default app;