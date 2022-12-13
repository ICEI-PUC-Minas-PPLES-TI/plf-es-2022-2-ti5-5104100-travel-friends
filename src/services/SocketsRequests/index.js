import clientSocket, { io } from "socket.io-client";
import api from "../api";

const appSocket = io.connect("https://ti5-mensageria.herokuapp.com", {
    reconnectionDelay: 1000,
    reconnection: true,
    reconnectionAttemps: 10,
    transports: ['websocket'],
    agent: false,
    upgrade: false,
    rejectUnauthorized: false
});

export const subscribe = (newCallback) => {
    api.on("inscricao", (result) => {
      result = JSON.parse(result);
      newCallback(result);
    });
  }

export default appSocket;