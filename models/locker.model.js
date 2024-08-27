import mongoose, { Schema } from "mongoose";


const lockerSchema = new Schema({
    lockerNumber: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        enum: ["small", "medium", "large"],
        default: "medium"
    },
    reservationStatus: {
        type: String,
        enum: ["available", "occupied", "maintenance"],
        default: "available"
    },
    currentUser: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    code: {
        type: Number
    },
    rentalPrice: {
        type: Number,
        required: true,
        default: 10  // Default value, will be overwritten by the middleware if necessary
    },
    checkInTime: {
        type: Date,
    },
    checkOutTime: {
        type: Date,
    },
    status: {
        type: String,
        enum: ["open", "close"],
        default: "close"
    },
    extraTime: {
        type: Number,
        default: 0
    },
    history: [{
        type: Schema.Types.ObjectId,
        ref: "LockerHistory"
    }]


}, { timestamps: true })

// Pre-save middleware to set the rentalPrice based on the size

lockerSchema.pre("save", function (next) {

    switch (this.size) {
        case "small":
            this.rentalPrice = 10
            break

        case "medium":
            this.rentalPrice = 15
            break

        case "large":
            this.rentalPrice = 25
            break


        default:
            this.rentalPrice = 10
    }

    next()
})


const Locker = mongoose.model("Locker", lockerSchema)
export default Locker   