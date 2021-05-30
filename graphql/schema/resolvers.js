const data = require("../data");

const resolvers = {
	Query: {
		logo: (root, args, context, info) => {
			return data.logos.find((logo) => logo.name === args.name);
		},
		menu: (root, args, context, info) => {
			return data.menus.find((menu) => menu.name === args.name);
		},
		button: (root, args, context, info) => {
			return data.buttons.find((btn) => btn.name === args.name);
		}
	}
};

module.exports = resolvers;
