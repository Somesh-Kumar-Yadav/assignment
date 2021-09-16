const express = require("express");

const { body, validationResult } = require("express-validator");

const User = require("../models/user.model");

const router = express.Router();

const crudController = require("./crud.controller");

router.post(
	"",
	body("first_name").isLength({ min: 1 }).withMessage("Enter first name"),
	body("last_name").isLength({ min: 1 }).withMessage("Enter last name"),
	body("email")
		.isLength({ min: 1 })
		.withMessage("Enter email address")
		.isEmail()
		.withMessage("Invalid email address"),
	body("gender").custom((value) => {
		const val = value.toLowerCase();
		if (val !== "male" && val !== "female" && val !== "others") {
			throw new Error("Enter a valid gender");
		}
		return true;
	}),
	body("pincode")
		.isLength({ min: 6, max: 6 })
		.withMessage("Enter valid pincode"),
	body("age").custom((value) => {
		if (value < 1 || value > 100) {
			throw new Error("Age should be in between 1 - 100");
		}
		return true;
	}),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const user = await User.create(req.body);
		return res.status(201).json({ user });
	}
);
router.get("", crudController(User).get);
router.get("/:id", crudController(User).getOne);
router.delete("/:id", crudController(User).deleteOne);
router.patch("/:id", crudController(User).updateOne);

module.exports = router;
