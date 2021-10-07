const express = require("express");
const Student = require("../models/student.model");

const router = express.Router();

router.post("/", async (req, res) => {
	try {
		const student = await Student.create({
			name: req.body.name,
			age: Number(req.body.age),
			gender: req.body.gender,
			city: req.body.city,
		});
		return res.status(201).json({ student });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.get("/", async (req, res) => {
	try {
		let page = parseInt(req.query.page);
		if (!req.query.page) {
			page = 1;
		}
		const to = (page - 1) * 10;
		let data = await Student.find().lean().exec();
		if (req.query.age !== "NaN") {
			data = data.filter((item) => item.age === parseInt(req.query.age));
		}
		if (req.query.gender && req.query.gender !== "null") {
			data = data.filter((item) => item.gender === req.query.gender);
		}
		if (req.query.city && req.query.city !== "null") {
			data = data.filter(
				(item) => item.city.toLowerCase() === req.query.city.toLowerCase()
			);
		}
		if (req.query.sort) {
			if (req.query.sort === "asce") {
				data = data.sort((a, b) => a.age - b.age);
			} else if (req.query.sort === "desc") {
				data = data.sort((a, b) => b.age - a.age);
			}
		}
		const total = data.length;
		const pages = Math.ceil(total / 10);
		const from = page * 10;
		return res.status(200).json({
			count: total,
			pages,
			page,
			data: data.slice(to, from),
		});
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.get("/:id", async (req, res) => {
	try {
		const student = await Student.findById(req.params.id).lean().exec();
		return res.status(200).json({ student });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.patch("/:id", async (req, res) => {
	try {
		const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		return res.status(200).json({ student });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
router.delete("/:id", async (req, res) => {
	try {
		const student = await Student.findByIdAndDelete(req.params.id);
		return res.status(200).json({ student });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});
module.exports = router;
