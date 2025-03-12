import mongoose, { Document, Schema } from "mongoose";

interface ICard extends Document{
    title: string;
    body?: string;
    date: Date;
}

const cardSchema = new Schema<ICard>({
    title: { type: String, required: true }, 
    body: String,
    date: {type: Date, default: Date.now}
})

const Card = mongoose.model<ICard>("Card", cardSchema);
export default Card;