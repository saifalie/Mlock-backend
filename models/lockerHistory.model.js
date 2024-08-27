import mongoose, { Schema } from "mongoose";


const lockerHistorySchema = new Schema({
    locker: {
        type: Schema.Types.ObjectId,
        ref: "Locker"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    checkInTime: {
        type: Date,
        required: true
    },
    checkOutTime: {
        type: Date,
        required: true
    },
    checkOutUserTime: {
        type: Date,
        required: true
    },
    payment: {
        type: Schema.Types.ObjectId,
        ref: "Payment"
    }

}, { timestamps: true })

const LockerHistory = mongoose.model("LockerHistory", lockerHistorySchema)

export default LockerHistory