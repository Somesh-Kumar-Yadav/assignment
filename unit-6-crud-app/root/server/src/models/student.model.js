const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		age: { type: Number, required: true },
		gender: { type: String, required: true },
		city: { type: String, required: true },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = mongoose.model("User", UserSchema);
