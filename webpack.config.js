const path = require("path")

module.exports = {
	entry: {
		aaafile: "./src/aaa.js",
		bbbfile: "./src/bbb.js"
	},
	output: {
		filename: "[name].bundle.js",
		path: path.join(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"]
					}
				}
			}
		]
	}
}











