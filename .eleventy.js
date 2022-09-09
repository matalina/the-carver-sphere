const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const filters = require('./utils/filters.js');
const transforms = require('./utils/transforms.js');
const collections = require('./utils/collections.js');
const shortcodes = require('./utils/shortcodes.js');
const paired = require('./utils/paired-shortcodes.js');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	// Folders to copy to build dir (See. 1.1)
	eleventyConfig.addPassthroughCopy("src/static");
	eleventyConfig.addPassthroughCopy("src/images");

	// Filters 
	Object.keys(filters).forEach((filterName) => {
		eleventyConfig.addFilter(filterName, filters[filterName]);
	});

	// Transforms
	Object.keys(transforms).forEach((transformName) => {
		eleventyConfig.addTransform(transformName, transforms[transformName]);
	});

	// Collections
	Object.keys(collections).forEach((collectionName) => {
		eleventyConfig.addCollection(collectionName, collections[collectionName]);
	});

	// Shortcodes
	Object.keys(shortcodes).forEach((name) => {
		eleventyConfig.addShortcode(name, shortcodes[name]);
	});

	// PairedShortcodes
	Object.keys(paired).forEach((name) => {
		eleventyConfig.addPairedShortcode(name, paired[name]);
	});

	// This allows Eleventy to watch for file changes during local development.
	eleventyConfig.setUseGitIgnore(false);

	return {
		dir: {
			input: "src/",
			output: "dist",
			includes: "_includes",
			layouts: "_layouts"
		},
		templateFormats: ["html", "md", "njk"],
		htmlTemplateEngine: "njk",

		// 1.1 Enable eleventy to pass dirs specified above
		passthroughFileCopy: true
	};
};
