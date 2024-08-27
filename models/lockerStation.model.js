import mongoose, { Schema } from "mongoose";


const lockerStationSchema = new Schema({
    status: {
        type: String,
        enum: ["close", "open", "maintenance"],
        default: "close"
    },
    lockers: [
        {
            type: Schema.Types.ObjectId,
            ref: "Locker"
        }
    ],
    location: {
        type: Schema.Types.ObjectId,
        ref: "LockerLocation"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})


const LockerStation = mongoose.model("LockerStation", lockerStationSchema)
export default LockerStation