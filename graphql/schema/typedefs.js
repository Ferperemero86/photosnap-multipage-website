const { gql } = require("apollo-server");

const schema = gql`
	type Logo {
		name: String!
		url: String!
	}

	type Link {
		url: String!
		label: String!
	}

	type Menu {
		name: String!
		links: [Link]!
	}

	type Button {
		name: String!
		label: String!
	}

	type Icon {
		name: String!
		url: String!
	}

	type Image {
		size: String
		url: String
	}

	type Card {
		category: String
		heading: String
		text: String
		images: [Image]!
		backgroundImages: [Image]
	}

	type GroupCard {
		name: String
		cards(limit: Int): [Card!]!
	}

	type CopyRight {
		text: String!
	}

	type PlanPrice {
		name: String
		price: String
		heading: String
		bodyText: String
	}

	type Query {
		logos(name: String): [Logo]
		menus(name: String): [Menu]
		button(name: String!): Button
		buttons(name: String): [Button]
		icon(name: String!): Icon
		copyRight: CopyRight
		groupCards(category: String): [GroupCard]
		planPrices(name: String): [PlanPrice]
	}
`;

module.exports = schema;
