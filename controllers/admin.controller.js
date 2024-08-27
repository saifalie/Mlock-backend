import LockerLocation from "../models/lockerLocation.model.js";
import LockerStation from "../models/lockerStation.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


export const createLockerLocation = asyncHandler(async (req, res) => {

    const { latitude, longitude, address } = req.body
    console.log(latitude, longitude, address);

    try {

        const lockerLocation = await LockerLocation.create({
            latitude,
            longitude,
            address
        })

        console.log("successfully created the lockerLoction", lockerLocation);

        return res.status(200)
            .json(new ApiResponse(200, lockerLocation, "successfully got the data"))

    } catch (error) {
        console.log("failed to create the lockerStation ", error);
        throw new ApiError(500, "failed to create the lockerStation", error)

    }



})


export const createLockerStation = asyncHandler(async (req, res) => {

    const { location, name } = req.body

    try {
        const lockerStation = await LockerStation.create({
            location,
            name
        })

        console.log("Successfully created the locker Station");

        return res.status(200).json(new ApiResponse(200, lockerStation, "Successfully created the locker Station"))



    } catch (error) {
        console.log("Failed to create the lockerStation ", error);
        throw new ApiError(500, "Failed to create the locker Station", error)

    }
})


