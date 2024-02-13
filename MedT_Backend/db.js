import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const mongoUrl = process.env.MONGO_URI;

const dbConnection = async () => {
    try {
        const connected = await mongoose.connect(mongoUrl)

        if (connected) {
            console.log('connected to mongoDB successfully')
        }
    } catch (error) {
        console.log(error)
    }
}


export default dbConnection;