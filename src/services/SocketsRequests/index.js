import { io } from "socket.io-client";

export const appSocket = io("https://ti5-mensageria.herokuapp.com", {
  reconnectionDelay: 1000,
  reconnection: true,
  reconnectionAttemps: 10,
  transports: ['websocket'],
  agent: false,
  upgrade: false,
  rejectUnauthorized: false
});

export const subscribe = (newCallback) => {
  appSocket.on("calc", (result) => {
    result = JSON.parse(result);
    console.log(result);
    newCallback(result);
  });
}
