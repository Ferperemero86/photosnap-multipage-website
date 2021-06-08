const path = require("path");

module.exports = {
	siteMetadata: {
		title: "photosnap-multipage-website"
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-transformer-json",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "data",
				path: path.join(__dirname, "/api/")
			}
		}
	]
};
