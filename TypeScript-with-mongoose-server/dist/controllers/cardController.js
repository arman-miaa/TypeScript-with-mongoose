"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cardModel_1 = __importDefault(require("../models/cardModel"));
const cardValidation_1 = __importDefault(require("../validations/cardValidation"));
// Create a new card
const createCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCard = cardValidation_1.default.parse(req.body);
        const result = yield cardModel_1.default.create(newCard);
        res.status(200).json({ success: true, data: result });
    }
    catch (error) {
        console.error(error); // Log the error for debugging
        res
            .status(400)
            .json({
            success: false,
            message: "Card Create Failed",
            error: error.message,
        });
    }
});
// Get all cards
const getCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cardModel_1.default.find();
        res.status(200).json({ success: true, data: result });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ success: false, error: error.message });
    }
});
// Get a single card by ID
const getSingleCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield cardModel_1.default.findById(id);
        if (!result) {
            res.status(404).json({ success: false, message: "Card Not Found" });
            return;
        }
        res.status(200).json({ success: true, data: result });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ success: false, message: error.message });
    }
});
// Update a card
const updateCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateData = cardValidation_1.default.parse(req.body);
        const result = yield cardModel_1.default.findByIdAndUpdate(id, updateData, { new: true });
        if (!result) {
            res.status(404).json({ success: false, message: "Card Not Found" });
            return;
        }
        res.status(200).json({ success: true, data: result });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ success: false, message: error.message });
    }
});
// Delete a card
const deleteCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield cardModel_1.default.findByIdAndDelete(id);
        if (!result) {
            res.status(404).json({ success: false, message: "Card Not Found" });
            return;
        }
        res
            .status(200)
            .json({
            success: true,
            message: "Card Deleted Successfully",
            data: result,
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ success: false, message: "Card Delete Failed" });
    }
});
exports.default = { createCard, getCard, deleteCard, updateCard, getSingleCard };
