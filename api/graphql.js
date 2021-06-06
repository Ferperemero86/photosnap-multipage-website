const enviroment =
	process.env.NODE_ENV === "production" ? "production" : "development";
require("dotenv").config({
	path: `./.env.${enviroment}`
});

const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema/typedefs");
const resolvers = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });
console.log("ENV VAR", process.env.API_PORT);
server
	.listen({ port: process.env.API_PORT })
	.then(({ url }) => console.log(`Server running at ${url}`));
