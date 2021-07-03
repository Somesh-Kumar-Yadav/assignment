const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.js",
		electronics: "./src/electronics.js",
		// scripts: "./src/scripts.js",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
};
