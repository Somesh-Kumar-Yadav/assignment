const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", crudController(User).post);
router.get("", crudController(User).get);
router.get("/:id", crudController(User).getOne);
router.delete("/:id", crudController(User).deleteOne);
router.patch("/:id", crudController(User).updateOne);

module.exports = router;
