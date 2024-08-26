
import { server, app } from "./app.js"
import dotenv from "dotenv"
import connectDB from "../db/index.js"

dotenv.config({
    path: './env'
})

const port = process.env.PORT || 8000


const startServer = async () => {

    try {
        // connect the mongoDB
        await connectDB().then(() => {

            server.listen(port, () => {
                console.log(`server is running at the port: ${port}`);

            })


        })
            .catch((error) => {
                console.log("MongoDB connection failed !! ", error);

            })



    } catch (error) {
        console.log("index.js ------something went wrong while initializing the server and mongodb", error);

    }

}

startServer()
