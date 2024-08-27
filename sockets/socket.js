import { Server } from "socket.io";


let io;

export const initializeSocket = (server) => {

    io = new Server(server, {
        cors: {
            origin: process.env.CORS_ORIGIN
        }

    })

    import('./socketHandler.js').then(module => {
        module.default(io)
    })




    

    return io
}

export const getIO = () => {
    if (!io) {
        throw new Error("Socket.io is not initialized")

    }
    return io;

}