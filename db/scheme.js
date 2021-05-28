const { gql } = require("apollo-server");

const scheme = gql`
	type Book {
		title: String
		author: String
	}

	type Query {
		books: [Book]
	}
`;

module.exports = scheme;
