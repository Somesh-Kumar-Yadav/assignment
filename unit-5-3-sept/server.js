const express = require("express");

const fs = require("fs");

const app = express();

const users_data = require("./users.json");

let users = users_data.users;

app.use(express.json());

app.get("/", function (req, res) {
	res.send("Welcome to Home page");
});

app.get("/users", function (req, res) {
	res.send(users);
});

app.post("/users", function (req, res) {
	const body = req.body;
	users = [...users, body];
	res.send(body);
	const data = { users: users };
	fs.writeFile("./users.json", JSON.stringify(data), (err) => {
		if (err) console.log("Error writing file:", err);
	});
});

app.patch("/user/:id", function (req, res) {
	const body = req.body;
	const id = req.params.id;
	users = users.map((user) => {
		if (user.id === Number(id)) {
			user = { ...user, ...body };
			res.send({ ...user });
		}
		return user;
	});
	const data = { users: users };
	fs.writeFile("./users.json", JSON.stringify(data), (err) => {
		if (err) console.log("Error writing file:", err);
	});
});

app.delete("/user/:id", function (req, res) {
	const id = req.params.id;
	users = users.filter((user) => {
		return user.id !== Number(id);
	});
	res.send(users);
	const data = { users: users };
	fs.writeFile("./users.json", JSON.stringify(data), (err) => {
		if (err) console.log("Error writing file:", err);
	});
});

app.listen(2345, () => {
	console.log("server is running");
});
