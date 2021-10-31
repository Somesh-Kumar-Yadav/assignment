const mongoose = require("mongoose");

const seriesSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		star_cast: [{ type: String, required: true }],
		director: { type: String, required: true },
		release_date: { type: String, required: true },
		rating: { type: Number, required: true },
		genre: { type: String, required: true },
		series_number: { type: Number, required: true },
		episode_number: { type: Number, required: true },
		premium: { type: Boolean, required: false, default: false },
	},
	{ timestamps: true, versionKey: false }
);

const Series = mongoose.model("series", seriesSchema);

module.exports = Series;
