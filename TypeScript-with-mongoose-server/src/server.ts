import app from "./app";
import { Request, Response } from "express";
import connectDB from "./config/db";

const port = process.env.PORT || 5000;

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Server Is Running.......");
});





app.listen(port, () => {
  console.log(`Server is Running on ${port}`);
});
