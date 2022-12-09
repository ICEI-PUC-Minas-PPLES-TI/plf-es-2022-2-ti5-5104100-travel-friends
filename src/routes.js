const { Router } = require("express");
const UserController = require("./controllers/UserController");

const routes = Router();

routes.post("/users", UserController.insertUser);
routes.get("/users", UserController.selectUser);
routes.post("/locals", UserController.insertLocal);
routes.get("/locals", UserController.selectLocal);
routes.post("/roadmaps", UserController.insertRoadMap);
routes.get("/roadmaps", UserController.selectRoadMap);

module.exports = routes;
