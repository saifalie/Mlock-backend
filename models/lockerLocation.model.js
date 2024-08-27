import mongoose, { Schema } from "mongoose";



const lockerLocationSchema = new Schema({

    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true })

const LockerLocation = mongoose.model("LockerLocation", lockerLocationSchema)
export default LockerLocation