
import express from "express"
import cardController from "../controllers/cardController";



const router = express.Router();

router.get("/getAllCards", cardController.getCard)

router.get("/card/:id", cardController.getSingleCard)

router.post("/Card", cardController.createCard);
router.put("/card/:id", cardController.updateCard)
router.delete("/card/:id", cardController.deleteCard)





export default router;