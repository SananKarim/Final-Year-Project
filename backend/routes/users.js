const express = require("express");
const usersRouter = express.Router();

/*
updated routes
*/

usersRouter.use("/auth", require("../apis/auth"));
module.exports = usersRouter;
