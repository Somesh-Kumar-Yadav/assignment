const express = require("express");

const Student = require("../models/student.model");
const User = require("../models/user.model");

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", crudController(Student).post);
router.get("", crudController(Student).get);
router.get("/:id", crudController(Student).getOne);
router.delete("/:id", crudController(Student).deleteOne);
router.patch("/:id", crudController(Student).updateOne);

router.get("/:id/name", async (req, res) => {
	console.log(req.params.id);
	const name = await Student.findById(req.params.id).lean().exec();
	console.log(name.user);
	const user = await User.findById(name.user).lean().exec();
	return res.status(200).json({ user });
});

module.exports = router;
