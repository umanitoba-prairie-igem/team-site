module.exports = function (eleventyConfig) {
	// copy our stylesheet into the site build
	eleventyConfig.addPassthroughCopy ("./src/assets/*");
	eleventyConfig.addPassthroughCopy ("./src/css/style.css");

	eleventyConfig.addCollection("sortedPages", function(collectionApi) {
		return collectionApi.getFilteredByTag("page")
			.sort((a, b) => a.data.position - b.data.position);
	});

	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};
