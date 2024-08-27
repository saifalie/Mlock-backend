import { Router } from "express";
import { createLockerLocation, createLockerStation } from "../controllers/admin.controller.js";


const adminSchema = Router()

adminSchema.route("/lockerLocation").post(createLockerLocation)
adminSchema.route("/lockerStation").post(createLockerStation)


export default adminSchema