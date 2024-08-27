import mongoose from "mongoose";


export const connectDB = async () => {
    const DB_URI = process.env.MONGODB_URI
    try {
        const connectionInstance = await mongoose.connect(`${DB_URI}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);


    } catch (error) {
        console.log(`MONGODB connection failed error: ${error}`);
        process.exit(1)

    }
}

export default connectDB