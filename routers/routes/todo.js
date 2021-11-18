const express = require("express");
const { createTodo, getAllTodo } = require("../controllers/todo");

const todoRouter = express.Router();

todoRouter.post("/create", createTodo);
todoRouter.get("/", getAllTodo);

module.exports = todoRouter;
