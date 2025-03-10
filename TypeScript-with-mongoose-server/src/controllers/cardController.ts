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

 const getCard = async (req: Request, res: Response) => {
    try {
        const result = await Card.find();
        res.status(200).json({success: true, data: result})
    } catch (error: any) {
        res.status(400).json({success: false, error: error.message})
    }
}

 const deleteCard = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await Card.findByIdAndDelete(id);
        if (!result) {
             res.status(400).json({ success: false, message: "Card Not Found" })
            return;
        }
        res.status(200).json({success: true, message: "Card Deleted Successfully",data:  result})
    } catch (error:any) {
        res.status(400).json({success: false, message:"Card Delete Failed"})
    }
}

export default {createCard,getCard,deleteCard};