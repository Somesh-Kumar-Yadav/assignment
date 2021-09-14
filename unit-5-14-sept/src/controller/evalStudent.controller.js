const express = require("express");

const EvalStudent = require("../models/evalStudent.model");
const Student = require("../models/student.model");
const User = require("../models/user.model");
const Topic = require("../models/topic.model");
const Evaluation = require("../models/evaluation.model");

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", crudController(EvalStudent).post);
router.get("", crudController(EvalStudent).get);
router.get("/:id", crudController(EvalStudent).getOne);
router.delete("/:id", crudController(EvalStudent).deleteOne);
router.patch("/:id", crudController(EvalStudent).updateOne);

router.get("/:id/students", async (req, res) => {
	console.log(req.params.id);
	const name = await EvalStudent.findById(req.params.id)
		.populate({ path: "students", populate: { path: "user" } })
		.lean()
		.exec();
	return res.status(200).json({ name });
});

router.get("/:id/students/high", async (req, res) => {
	console.log(req.params.id);
	const name = await EvalStudent.findById(req.params.id).lean().exec();
	let index = 0;
	let marks = 0;
	name.marks.map((item, i) => {
		if (item > marks) {
			marks = item;
			index = i;
		}
	});
	console.log(index);
	const student = await Student.findById(name.students[index])
		.populate({ path: "user" })
		.lean()
		.exec();
	return res.status(200).json({ student });
});

module.exports = router;
