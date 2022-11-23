const webSocketsServerPort = 3334;
const webSocketServer = require("websocket").server;
const http = require("http");

const server = http.createServer();
server.listen(webSocketsServerPort);
console.log("listening on port 8000");

const wsServer = new webSocketServer({
  httpServer: server,
});

const clients = {};

const getUniqueID = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return s4() + s4() + "-" + s4();
};

wsServer.on("request", function (request) {
  var userID = getUniqueID();
  console.log(
    new Date() +
      " Recieved a new connection from origin " +
      request.origin +
      "."
  );

  const connection = request.accept(null, request.origin);
  clients[userID] = connection;
  console.log(
    "connected: " + userID + " in " + Object.getOwnPropertyNames(clients)
  );

  connection.on("message", function (message) {
    if (message.type === "utf8") {
      console.log("Received Message: ", message.utf8Data);

      for (key in clients) {
        clients[key].sendUTF(message.utf8Data);
        console.log("sent Message to: ", clients[key]);
      }
    }
  });
});
