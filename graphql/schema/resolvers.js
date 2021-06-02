const data = require("../data");

const { logos, menus, buttons, icons, groupCards, copyRight } = data;

const resolvers = {
	Query: {
		logos: (root, args, context, info) => {
			if (args.name) {
				return logos.filter((logo) => {
					return args.name.includes(logo.name);
				});
			}
			return logos;
		},
		menus: (root, args, context, info) => {
			if (args.name) {
				return menus.filter((menu) => {
					return args.name.includes(menu.name);
				});
			}
			return menus;
		},
		button: (root, args, context, info) => {
			return buttons.find((btn) => btn.name === args.name);
		},
		buttons: (root, args, context, info) => {
			if (args.name) {
				return buttons.filter((btn) => {
					return args.name.includes(btn.name);
				});
			}
			return buttons;
		},
		icon: (root, args, context, info) => {
			return icons.find((icon) => icon.name === args.name);
		},
		copyRight: (root, args, context, info) => {
			console.log(copyRight);
			return copyRight;
		},
		groupCards: (root, args, context, info) => {
			if (args.category) {
				return groupCards.filter((group) => {
					return args.category.includes(group.name);
				});
			}

			return groupCards;
		}
	}
};

module.exports = resolvers;
