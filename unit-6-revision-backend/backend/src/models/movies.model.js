const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		star_cast: [{ type: String, required: true }],
		director: { type: String, required: true },
		release_date: { type: String, required: true },
		rating: { type: Number, required: true },
		genre: { type: String, required: true },
		premium: { type: Boolean, required: false, default: false },
	},
	{ timestamps: true, versionKey: false }
);

const Movies = mongoose.model("movies", moviesSchema);

module.exports = Movies;
