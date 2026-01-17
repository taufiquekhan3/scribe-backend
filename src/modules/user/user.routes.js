import express from "express";
import createUser from "./user.controller.js";

const UserRouter = express.Router();

UserRouter.post("/createUser", createUser);

export default UserRouter;