import { Request, Response } from "express";
import Card from "../models/cardModel";
import cardValidationSchema from "../validations/cardValidation";

// Create a new card
const createCard = async (req: Request, res: Response) => {
  try {
    
    const newCard = cardValidationSchema.parse(req.body)
    console.log(req.body,newCard);
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

const getCard = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const result = await Card.find().skip(skip).limit(limit);
    const total = await Card.countDocuments();

    // Calculate hasMore and nextPage
    const totalPages = Math.ceil(total / limit);
    const hasMore = page < totalPages;
    const nextPage = hasMore ? page + 1 : null; // null দিলে undefined হয়ে যাবে

    res.status(200).json({
      success: true,
      data: result,
      totalPages,
      currentPage: page,
      hasMore,
      nextPage,
    });
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
