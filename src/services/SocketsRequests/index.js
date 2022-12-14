import clientSocket, { io } from "socket.io-client";
import api from "../api";

export const appSocket = io.connect("https://ti5-mensageria.herokuapp.com");

export const subscribe = (newCallback) => {
  appSocket.on("calc", (result) => {
    result = JSON.parse(result);
    console.log(result);
    newCallback(result);
  });
}
