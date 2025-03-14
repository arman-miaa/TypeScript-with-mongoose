import express, { Request, Response } from "express";
import cors from "cors";
import cardRouter from "./routes/cardRoute";
import notFoundRoute from "./middlewares/notFoundRoute";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();


// Middlewere
app.use(cors());
app.use(express.json());


app.use("/api", cardRouter)

app.get("/", (req: Request, res: Response) => {
  res.send("Server Is Running.......");
});

// not found route
app.use("*", notFoundRoute)

// global error handler
app.use(globalErrorHandler)


export default app;