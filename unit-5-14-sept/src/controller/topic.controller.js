const express = require("express");

const Topic = require("../models/topic.model");

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", crudController(Topic).post);
router.get("", crudController(Topic).get);
router.get("/:id", crudController(Topic).getOne);
router.delete("/:id", crudController(Topic).deleteOne);
router.patch("/:id", crudController(Topic).updateOne);

module.exports = router;
