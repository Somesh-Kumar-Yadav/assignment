const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

const jwt = require("jsonwebtoken");

const newToken = (user) => {
	return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY);
};

router.get("/", async (req, res) => {
	const user = await User.find().populate().lean().exec();
	return res.status(200).json({ user });
});
router.get("/:id", async (req, res) => {
	const user = await User.findById(req.params.id).populate().lean().exec();
	return res.status(200).json({ user });
});
router.patch("/:id", async (req, res) => {
	const payload = { type: req.body.type };
	const user = await User.findByIdAndUpdate(req.params.id, payload, {
		new: true,
	});
	const token = newToken(user);
	return res.status(200).json({ token: token });
});
router.delete("/:id", async (req, res) => {
	const user = await User.findByIdAndDelete(req.params.id);
	return res.status(200).json({ user });
});

module.exports = router;
