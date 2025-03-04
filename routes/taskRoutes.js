import { createTask, getTask,  deleteTask } from "../controllers/taskController.js";
import express from "express";

const Router= express.Router();

Router.post("/createTask", createTask )

Router.get("/getTasks", getTask)

Router.delete("/deleteTask", deleteTask)

export {Router};