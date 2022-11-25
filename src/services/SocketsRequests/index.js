import { io } from "socket.io-client";

const appSocket = io("https://travel-friends-backend.herokuapp.com", {
    reconnectionDelay: 1000,
    reconnection: true,
    reconnectionAttemps: 10,
    transports: ['websocket'],
    agent: false,
    upgrade: false,
    rejectUnauthorized: false
});

export default appSocket;