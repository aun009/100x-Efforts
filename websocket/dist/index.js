import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", (socket) => {
    console.log("user connected");
    // setInterval(() => {
    //     socket.send("Current price of solana is : " + Math.random())
    // }, 5000)
    // socket.send("hello")
    // to get msg from the clients 
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
//# sourceMappingURL=index.js.map