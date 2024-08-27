import { Router } from "express";
import { createLocker, createLockerLocation, createLockerStation } from "../controllers/admin.controller.js";


const adminSchema = Router()

adminSchema.route("/lockerLocation").post(createLockerLocation)
adminSchema.route("/lockerStation").post(createLockerStation)
adminSchema.route("/locker").post(createLocker)


export default adminSchema