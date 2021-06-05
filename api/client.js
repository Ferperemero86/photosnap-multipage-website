import { ApolloClient, InMemoryCache } from "@apollo/client";
import fetch from "isomorphic-fetch";

export const client = new ApolloClient({
	fetch,
	uri: "http://localhost:9000/api/graphql",
	cache: new InMemoryCache()
});
