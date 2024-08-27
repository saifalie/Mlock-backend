import { Router } from "express";
import { createLockerLocation } from "../controllers/admin.controller.js";


const adminSchema = Router()

adminSchema.route("/lockerLocation").post(createLockerLocation)

export default adminSchema