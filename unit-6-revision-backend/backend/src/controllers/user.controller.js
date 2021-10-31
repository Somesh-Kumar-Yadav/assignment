const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

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
	return res.status(200).json({ user });
});
router.delete("/:id", async (req, res) => {
	const user = await User.findByIdAndDelete(req.params.id);
	return res.status(200).json({ user });
});

module.exports = router;
