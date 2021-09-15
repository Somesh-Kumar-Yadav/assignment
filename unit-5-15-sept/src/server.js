const express = require("express");

const connect = require("./config/db");

const app = express();

app.use(express.json());

const userController = require("./controller/user.controller");
const adminController = require("./controller/admin.controller");

app.use("/users", userController);
app.use("/admins", adminController);

app.listen(2345, async function () {
	await connect();
	console.log("connected server on port 2345");
});
