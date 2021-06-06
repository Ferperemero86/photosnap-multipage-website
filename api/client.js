import { ApolloClient, InMemoryCache } from "@apollo/client";
import fetch from "isomorphic-fetch";

export const client = new ApolloClient({
	fetch,
	uri: process.env.API_URL,
	cache: new InMemoryCache()
});
