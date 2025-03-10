import { Request, Response } from "express";
import Card from "../models/cardModel";


const createCard = async (req: Request, res:Response) => {
    try {
        const newCard = req.body;
        const result = await Card.create(newCard)
        res.status(200).json({success: true, data: result})
    } catch (error: any) {
        res.status(400).json({success: false, message: "Card Create Failed",error: error.message})
    }
}

export default createCard;