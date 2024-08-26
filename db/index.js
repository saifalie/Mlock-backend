import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";

export const connectDB = async () => {
    const DB_URI = process.env.MONGODB_URI
    try {
        const connectionInstance = await mongoose.connect(`${DB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);


    } catch (error) {
        console.log(`MONGODB connection failed error: ${error}`);
        process.exit(1)

    }
}

export default connectDB