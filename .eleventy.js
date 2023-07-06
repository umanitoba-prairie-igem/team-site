module.exports = function (eleventyConfig) {
	// copy our stylesheet into the site build
	eleventyConfig.addPassthroughCopy ("./src/assets/*");

	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};
