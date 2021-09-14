const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
	{
		roll_id: { type: String, required: true },
		batch: { type: String, required: true },
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
