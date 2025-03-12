"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cardController_1 = __importDefault(require("../controllers/cardController"));
const router = express_1.default.Router();
router.get("/getAllCards", cardController_1.default.getCard);
router.get("/card/:id", cardController_1.default.getSingleCard);
router.post("/Card", cardController_1.default.createCard);
router.put("/card/:id", cardController_1.default.updateCard);
router.delete("/card/:id", cardController_1.default.deleteCard);
exports.default = router;
