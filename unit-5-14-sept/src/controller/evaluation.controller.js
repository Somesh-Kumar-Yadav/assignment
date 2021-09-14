const express = require("express");

const Evaluation = require("../models/evaluation.model");

const router = express.Router();

const crudController = require("./crud.controller");

router.post("", crudController(Evaluation).post);
router.get("", crudController(Evaluation).get);
router.get("/:id", crudController(Evaluation).getOne);
router.delete("/:id", crudController(Evaluation).deleteOne);
router.patch("/:id", crudController(Evaluation).updateOne);

module.exports = router;
