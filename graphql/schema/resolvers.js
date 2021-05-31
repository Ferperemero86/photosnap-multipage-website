const data = require("../data");

const { logos, menus, buttons, icons, groupCards } = data;

const resolvers = {
	Query: {
		logo: (root, args, context, info) => {
			return logos.find((logo) => logo.name === args.name);
		},
		menu: (root, args, context, info) => {
			return menus.find((menu) => menu.name === args.name);
		},
		button: (root, args, context, info) => {
			return buttons.find((btn) => btn.name === args.name);
		},
		icon: (root, args, context, info) => {
			return icons.find((icon) => icon.name === args.name);
		},
		groupCards: (root, args, context, info) => {
			if (args.category) {
				return groupCards.filter((group) => args.category.includes(group.name));
			}

			return groupCards;
		}
	}
};

module.exports = resolvers;
