require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`
});

const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema/typedefs");
const resolvers = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });
console.log("ENV VAR", process.env.GATSBY_API_PORT);
server
	.listen({ port: process.env.GATSBY_API_PORT })
	.then(({ url }) => console.log(`Server running at ${url}`));
