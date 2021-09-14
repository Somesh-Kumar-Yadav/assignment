const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema(
	{
		date: { type: String, required: true },
		instructor: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
		topic: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "topic",
			required: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const Evaluation = mongoose.model("evaluation", evaluationSchema);

module.exports = Evaluation;
