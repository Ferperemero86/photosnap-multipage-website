const enviroment =
	process.env.NODE_ENV === "production" ? "production" : "development";

require("dotenv").config({
	path: `./.env.${enviroment}`
});

const { ApolloServer } = require("apollo-server");

const typeDefs = require("./api/schema/typedefs");
const resolvers = require("./api/schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server
	.listen({ port: process.env.API_PORT })
	.then(({ url }) => console.log(`Server running at ${url}`));
