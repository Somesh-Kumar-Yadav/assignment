const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
	return mongoose.connect("mongodb://localhost:27017/assignment", {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	});
};

const userSchema = new mongoose.Schema(
	{
		movie_name: { type: String, required: true },
		movie_genre: { type: String, required: true },
		production_year: { type: Number, required: true },
		budget: { type: Number, required: true },
		id: { type: Number, required: false },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const User = mongoose.model("movie", userSchema);

// get all the users

app.get("/movies", async (req, res) => {
	try {
		const movies = await User.find().lean().exec();
		res.send(movies);
	} catch (err) {
		res.status(400).json({ status: "error", message: err.message });
	}
});

//post a user

app.post("/movies", async (req, res) => {
	try {
		const movies = await User.create(req.body);
		res.status(201).send(movies);
	} catch (err) {
		res.status(400).json({ status: "error", message: err.message });
	}
});

// patch  one

app.patch("/movies/:id", async (req, res) => {
	try {
		const movies = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).send(movies);
	} catch (err) {
		res.status(400).json({ status: "error", message: err.message });
	}
});

// get one

app.get("/movies/:id", async (req, res) => {
	try {
		const movies = await User.findById(req.params.id);
		res.status(200).send(movies);
	} catch (err) {
		res.status(400).json({ status: "error", message: err.message });
	}
});

// delete  one

app.delete("/movies/:id", async (req, res) => {
	try {
		const movies = await User.findByIdAndDelete(req.params.id);
		res.status(200).send(movies);
	} catch (err) {
		res.status(400).json({ status: "error", message: err.message });
	}
});

app.listen(2345, async function () {
	await connect();
	console.log("connected server on port 2345");
});
