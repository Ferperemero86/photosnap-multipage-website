const { gql } = require("apollo-server");

const schema = gql`
	type Logo {
		name: String
		url: String!
	}

	type Query {
		logos: [Logo]
	}
`;

module.exports = schema;
