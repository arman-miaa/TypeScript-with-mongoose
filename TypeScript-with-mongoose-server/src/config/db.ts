import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/test2')
            
                console.log('MongoDB Connected Successfully');
          
    } catch (error:any) {
        console.log('MongoDB Connected Failed', error.message);
        process.exit(1);
    }
}

export default connectDB;