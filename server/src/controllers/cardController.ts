import { Request, Response } from "express";
import Card from "../models/cardModel";
import cardValidationSchema from "../validations/cardValidation";

// Create a new card
const createCard = async (req: Request, res: Response) => {
  try {
    const newCard = cardValidationSchema.parse(req.body)
    const result = await Card.create(newCard);
    res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    console.error(error); // Log the error for debugging
    res
      .status(400)
      .json({
        success: false,
        message: "Card Create Failed",
        error: error.message,
      });
  }
};

// Get all cards
const getCard = async (req: Request, res: Response) => {
  try {
    
    const result = await Card.find();
    res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get a single card by ID
const getSingleCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Card.findById(id);
    if (!result) {
      res.status(404).json({ success: false, message: "Card Not Found" });
      return;
    }
    res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// Update a card
const updateCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = cardValidationSchema.parse(req.body);
    const result = await Card.findByIdAndUpdate(id, updateData, { new: true });
    if (!result) {
      res.status(404).json({ success: false, message: "Card Not Found" });
      return;
    }
    res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
}; 

// Delete a card
const deleteCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Card.findByIdAndDelete(id);
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
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ success: false, message: "Card Delete Failed" });
  }
};



export default { createCard, getCard, deleteCard, updateCard, getSingleCard };
