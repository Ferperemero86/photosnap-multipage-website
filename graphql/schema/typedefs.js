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
	}

	type GroupCard {
		name: String
		cards(limit: Int): [Card!]!
	}

	type Query {
		logo(name: String!): Logo
		menu(name: String!): Menu
		button(name: String!): Button
		buttons(name: String): [Button]
		icon(name: String!): Icon
		groupCards(category: String): [GroupCard]
	}
`;

module.exports = schema;
