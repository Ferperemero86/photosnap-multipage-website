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

	type Query {
		logo(name: String): Logo
		menu(name: String): Menu
		button(name: String): Button
	}
`;

module.exports = schema;
