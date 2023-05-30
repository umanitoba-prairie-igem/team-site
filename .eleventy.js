module.exports = function (eleventyConfig) {
	// copy our stylesheet into the site build
	eleventyConfig.addPassthroughCopy ("./src/css/style.css");

	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};
