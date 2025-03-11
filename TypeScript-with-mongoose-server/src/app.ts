import express from "express";
import cors from "cors";
import cardRouter from "./routes/cardRoute";
import notFoundRoute from "./middlewares/notFoundRoute";

const app = express();


// Middlewere
app.use(cors());
app.use(express.json());


app.use("/api", cardRouter)

// not found route
app.use("*", notFoundRoute)

export default app;