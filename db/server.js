const { ApolloServer } = require("apollo-server");

const typeDefs = require("../db/scheme");
const resolvers = require("../db/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });
server
	.listen({ port: 9000 })
	.then(({ url }) => console.log(`Server running at ${url}`));
