const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		singer: [{ type: String, required: true }],
		music_director: { type: String, required: true },
		lyricist: { type: String, required: true },
		genre: { type: String, required: true },
		premium: { type: Boolean, required: false, default: false },
	},
	{ timestamps: true, versionKey: false }
);

const Music = mongoose.model("music", musicSchema);

module.exports = Music;
