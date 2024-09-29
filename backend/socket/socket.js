import { Server } from "socket.io";
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:["http://localhost:3001"],
        methods:["GET" , "POST"],
        credentials: true //for cookies and auth
    }
});

export const getSocketRecieverId = (recieverId) =>{
    return userSocketMap[recieverId];
}

const userSocketMap = {} // for userId:socketId

io.on('connection' , (socket)=>{
    console.log("a user is connected " , socket.id);

    const userId = socket.handshake.query.userId;
    if(userId !=="undefined"){
        userSocketMap[userId] = socket.id;
    }//when the user connect it sends the event to the online users in the next code below using emit

    //emit is used to send events to all the connected clients 
    io.emit("getOnlineUsers" , Object.keys(userSocketMap))

    // socket.on() is is used to listen to events , can be used in both client and user side 
    socket.on("diconnect" , ()=>{
        console.log("user disconnected " , socket.id);
        delete userSocketMap[userId]; 
        io.emit("getOnlineUsers" , Object.keys(userSocketMap))

    })
})


export {app , io , server};