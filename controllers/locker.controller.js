import { asyncHandler } from "../utils/asyncHandler.js";


export const listAllLockers = asyncHandler(async (req, res) => {


    res.send("listing all lockers")
})