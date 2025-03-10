
import express from "express"
import cardController from "../controllers/cardController";



const router = express.Router();

router.get("/getCard", cardController.getCard )

router.post("/postCard", cardController.createCard);
router.delete("/card/:id", cardController.deleteCard)

// router.delete("/card/:id", cardController.deleteCard )



export default router;