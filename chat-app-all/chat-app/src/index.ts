
import { WebSocketServer, WebSocket } from "ws"


const wss = new WebSocketServer({port : 8080})


let allSockets : User[] = [];

interface User{
    socket : WebSocket;
    room : string;
}

wss.on("connection", (socket) => {
    console.log("connection is done");

    socket.on("message", (message) => {

        const parsedMessage = JSON.parse(message as unknown as string);

        if(parsedMessage.type == "join") {
            allSockets.push({
                socket, 
                room : parsedMessage.payload.roomId
            })

            console.log(allSockets);
            
        }


        if(parsedMessage.type == "chat") {

            
            
            const currUserSocket = allSockets.find((x)=> x.socket == socket); // here we got the curr socket
            
            console.log("chat is connected " + currUserSocket);
            if(currUserSocket) {
                const currUsersRoom = currUserSocket?.room

                // for the whatever rooms does he belongs send all of them that message
                const usersInSameRoom = allSockets.filter((x)=> x.room == currUsersRoom);

                usersInSameRoom.forEach((s) => {
                    s.socket.send(JSON.stringify({ type: "chat", payload: { message: parsedMessage.payload.message, user: "" } }));
                });

            }

        }

    })
    
})