const express = require("express");
const dotenv = require("dotenv");
require("./db/db");
const userRouter = require("./routers/routes/user");
const todoRouter = require("./routers/routes/todo");

const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.use("/users", userRouter);
app.use("/todo", todoRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
