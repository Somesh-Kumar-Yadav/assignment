const express = require("express");

const Admin = require("../models/admin.model");

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", crudController(Admin).post);
router.get("/", async (req, res) => {
	const admins = await Admin.find().populate("user").lean().exec();
	return res.status(200).json({ admins });
});
router.get("/:id", crudController(Admin).getOne);
router.delete("/:id", crudController(Admin).deleteOne);
router.patch("/:id", crudController(Admin).updateOne);

module.exports = router;
