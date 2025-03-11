import express from "express";
import cors from "cors";
import cardRouter from "./routes/cardRoute";
import notFoundRoute from "./middlewares/notFoundRoute";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();


// Middlewere
app.use(cors());
app.use(express.json());


app.use("/api", cardRouter)



// not found route
app.use("*", notFoundRoute)

// global error handler
app.use(globalErrorHandler)


export default app;