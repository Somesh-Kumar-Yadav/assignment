const express = require("express");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
	res.send("Get request hello");
});

app.get("/users", function (req, res) {
	const name = req.query.name;
	res.send(name);
});

app.post("/users", function (req, res) {
	const body = req.body.name;
	res.send(body);
});

app.get("/users/:id/:post", function (req, res) {
	const id = req.params.id;
	const post = req.params.post;
	res.send({ id, post });
	console.log({ id, post });
});

app.listen(2345, () => {
	console.log("server is running");
});
