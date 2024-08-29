import { Router } from "express";
import { listAllLockers } from "../controllers/locker.controller.js";


const lockerRouter = Router()



lockerRouter.route("/:stationID").get(listAllLockers)



export default lockerRouter