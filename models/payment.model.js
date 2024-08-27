import mongoose, { Schema } from "mongoose";


const paymentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    locker: {
        type: Schema.Types.ObjectId,
        ref: "Locker"
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["paid", "overdue", "pending"],
        default: "paid"
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

paymentSchema.pre("save", function (next) {
    this.updatedAt = Date.now()
    next()
})


const Payment = mongoose.model("Payment", paymentSchema)
export default Payment