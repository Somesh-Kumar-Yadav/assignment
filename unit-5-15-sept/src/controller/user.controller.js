const express = require("express");

const transporter = require("../config/mail");

const Admin = require("../models/admin.model");

const User = require("../models/user.model");

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", async (req, res) => {
	const user = await User.create(req.body);
	const admins = await Admin.find().populate({ path: "user" }).lean().exec();
	console.log(admins);
	await transporter.sendMail({
		from: "someshkumar71524@gmail.com",
		to: user.email,
		subject: `Welcome to ABC system ${user.first_name} ${user.last_name}`,
		text: `Hi ${user.first_name}, Please confirm your email address`,
		html: "<b>Hello world?</b>",
	});
	let st = "";
	admins.map((item) => {
		st += item.user.email + ",";
	});
	console.log(st);
	await transporter.sendMail({
		from: "someshkumar71524@gmail.com",
		to: st,
		subject: `${user.first_name} ${user.last_name} has registered with us`,
		text: `Please welcome ${user.first_name} ${user.last_name}`,
		html: "<b>Hello world?</b>",
	});
	return res.status(201).json({ user });
});
router.get("", crudController(User).get);
router.get("/:id", crudController(User).getOne);
router.delete("/:id", crudController(User).deleteOne);
router.patch("/:id", crudController(User).updateOne);

module.exports = router;
