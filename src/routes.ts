import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingController = new SettingsController();
routes.post("/settings", settingController.create);

const usersController = new UsersController();
routes.post("/users", usersController.create);

const messagesController = new MessagesController();
routes.post("/messages", messagesController.create);
routes.get("/messages/:user_id", messagesController.showByUserId);

const settingsController = new SettingsController();
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

export { routes };
