const { populate } = require("../../db/models/userSchema");
const userModel = require("../../db/models/userSchema");

// create new user
const createUser = (req, res) => {
  const { userName, email, password, phoneNumber, age } = req.body;

  // copy paste
  const newUser = new userModel({
    userName,
    email,
    password,
    phoneNumber,
    age,
  });
  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {

      // use populate to insert todo into users
      res.send(err);
    });
    
};

// get all users
const getAllUsers = (req, res) => {
  userModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

// exports all functios to routes
module.exports = { createUser, getAllUsers };
