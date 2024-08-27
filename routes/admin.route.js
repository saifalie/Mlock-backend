import { Router } from "express";
import { addLockerToStation, createLocker, createLockerLocation, createLockerStation } from "../controllers/admin.controller.js";


const adminSchema = Router()

adminSchema.route("/lockerLocation").post(createLockerLocation)
adminSchema.route("/lockerStation").post(createLockerStation)
adminSchema.route("/locker").post(createLocker)
adminSchema.route("/add/locker").put(addLockerToStation)


export default adminSchema