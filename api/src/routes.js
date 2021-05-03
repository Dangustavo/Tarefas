const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");
const TaskController = require("./controllers/TaskController");
const ProfileController = require("./controllers/ProfileController");
const SessionCOntroller = require("./controllers/SessionCOntroller");

routes.post("/session", SessionCOntroller.create);

routes.get("/users", UserController.index);
routes.post("/users", UserController.create);

routes.get("/profile", ProfileController.index);

routes.get("/task", TaskController.index);
routes.post("/task", TaskController.create);
routes.delete("/task/:id", TaskController.delete);
routes.put("/task/:id", TaskController.put);

module.exports = routes;
