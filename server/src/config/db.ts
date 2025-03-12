import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
//
const MONGO_URL = process.env.MONGODB_URL as string;
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
            
                console.log('MongoDB Connected Successfully');
          
    } catch (error:any) {
        console.log('MongoDB Connected Failed', error.message);
        process.exit(1);
    }
}

export default connectDB;