const todoModel = require("../../db/models/todoSchema");

const createTodo = (req, res) => {
  const { task, isDeleted, isCompleted } = req.body;

  const newTodo = new todoModel({
    task,
  });
  newTodo
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllTodo = (req, res) => {
  todoModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { createTodo, getAllTodo };
