const data = require("../data");

const resolvers = {
	Query: {
		logos: () => data.logos
	}
};

module.exports = resolvers;
