import LockerStation from "../models/lockerStation.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";



export const listAllLockers = asyncHandler(async (req, res) => {


    const lockerStationID = req.params.stationID

    console.log(lockerStationID);


    try {

        const lockerStationDetails = await LockerStation.findById(lockerStationID)
            .populate("lockers")
            .exec()

        if (!lockerStationDetails) {
            console.log("LockerStation not found");
            throw new ApiError(404, "LockerStation not found")

        }

        if (lockerStationDetails.lockers.length <= 0) {
            throw new ApiError(404, "Lockers not found")

        }
        console.log(lockerStationDetails);
        return res.status(200)
            .json(new ApiResponse(200, lockerStationDetails, "successfully found the lockerStation"))


    } catch (error) {
        console.log("Failed to load the lockerStation");
        throw new ApiError(500, "Failed to load the lockerStation", error)

    }




})