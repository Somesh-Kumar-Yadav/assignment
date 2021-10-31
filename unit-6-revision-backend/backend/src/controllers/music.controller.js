const express = require("express");

const { body, validationResult } = require("express-validator");

const router = express.Router();

const Music = require("../models/music.model");

const verifyToken = (token) => {
	return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

router.post(
	"/",
	body("title").isLength({ min: 1 }).withMessage("Enter title"),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const music = await Music.create(req.body);
		return res.status(201).json({ music });
	}
);

router.get("/", async (req, res) => {
	const music = await Music.find().populate().lean().exec();
	let data;
	if (!req.body.token) {
		data = music.slice(0, 3);
		return res.status(200).send({ total: data.length, data: data });
	}
	const user = verifyToken(req.body.token);
	if (user.user.type === "basic") {
		data = music.filter((a) => !a.premium);
		data = data.slice(0, 7);
		return res.status(200).send({ total: data.length, data: data });
	} else if (user.user.type === "premium") {
		data = music;
		return res.status(200).send({ total: data.length, data: data });
	}
	data = music.filter((a) => !a.premium);
	data = data.slice(0, 5);
	return res.status(200).send({ total: data.length, data: data });
});

module.exports = router;
