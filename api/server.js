const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema/typedefs");
const resolvers = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });
server
	.listen({ port: 9000 })
	.then(({ url }) => console.log(`Server running at ${url}`));
