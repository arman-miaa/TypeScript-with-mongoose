import app from "./app";
import { Request, Response } from "express"; // Import types

const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Server Is Running.......");
});

app.listen(port, () => {
  // Use app.listen() instead of app.Server()
  console.log(`Server is Running on ${port}`);
});
