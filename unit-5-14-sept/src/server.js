const express = require("express");

const connect = require("./config/db");

const app = express();

app.use(express.json());

const userController = require("./controller/user.controller");
const topicController = require("./controller/topic.controller");
const evaluationController = require("./controller/evaluation.controller");
const studentController = require("./controller/student.controller");
const evalStudentController = require("./controller/evalStudent.controller");

app.use("/users", userController);
app.use("/topics", topicController);
app.use("/evaluations", evaluationController);
app.use("/students", studentController);
app.use("/eval-students", evalStudentController);

app.listen(2345, async function () {
	await connect();
	console.log("connected server on port 2345");
});
