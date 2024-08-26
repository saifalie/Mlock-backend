

export default (io) => {

    io.on("connection", (socket) => {
        console.log("new client connected");

        socket.on("disconnect", () => {
            console.log("client disconnected", socket.id);

        })

    })
}