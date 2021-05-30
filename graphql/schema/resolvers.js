const data = require("../data");

const { logos, menus, buttons, icons, cards } = data;

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
		card: (root, args, context, info) => {
			return cards.find((card) => card.name === args.name);
		},
		cards: (root, args, context, info) => {
			const cardsSelected = cards.filter(
				(card) => card.category === args.category
			);

			if (args.limit) {
				return cardsSelected.slice(0, args.limit);
			}

			return cardsSelected;
		}
	}
};

module.exports = resolvers;
