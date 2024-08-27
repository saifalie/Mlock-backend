import express from "express"
import cors from "cors"
import http from "http"
import { initializeSocket } from "../sockets/socket.js"
import adminSchema from "../routes/admin.route.js"

const app = express()

// creating express server
const server = http.createServer(app)

//initialize socket.io with the HTTP sever
initializeSocket(server)


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/api/v1/admin", adminSchema)



export { app, server }