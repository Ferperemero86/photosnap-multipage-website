require("dotenv").config({
	path: `./.env`
});

const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema/typedefs");
const resolvers = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });
console.log("ENV VAR", process.env.API_PORT);
server
	.listen({ port: process.env.API_PORT })
	.then(({ url }) => console.log(`Server running at ${url}`));
