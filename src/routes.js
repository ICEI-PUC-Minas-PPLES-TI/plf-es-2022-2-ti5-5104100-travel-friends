const { Router } = require("express");
const UserController = require("./controllers/UserController");

const routes = Router();

routes.post("/users", UserController.insertUser);
routes.get("/users", UserController.selectUser);

module.exports = routes;
