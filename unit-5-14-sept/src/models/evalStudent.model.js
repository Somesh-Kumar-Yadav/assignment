const mongoose = require("mongoose");

const evalStudentSchema = new mongoose.Schema(
	{
		students: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "student",
				required: true,
			},
		],
		marks: [{ type: Number, required: true }],
		evaluation: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "evaluation",
			required: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const EvalStudent = mongoose.model("evalStudent", evalStudentSchema);

module.exports = EvalStudent;
