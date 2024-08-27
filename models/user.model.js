import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    authId: {
        type: String,
        required: true,
        unique: true
    },
    currentLocker: {
        type: Schema.Types.ObjectId,
        ref: "Locker"
    },
    lockerHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "LockerHistory"
        }
    ],
    paymentHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "PaymentHistory"
        }
    ],
    location: {
        latitude: Number,
        longitude: Number

    },
    createdAt: {
        type: Date,
        default: Date.now
    }


})

const User = mongoose.model("User", userSchema)
export default User