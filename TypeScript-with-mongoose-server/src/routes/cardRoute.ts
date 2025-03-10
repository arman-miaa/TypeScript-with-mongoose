
import express, { Router } from "express"
import createCard from "../controllers/cardController";

const router = express.Router();

router.post("/", createCard)

export default router;