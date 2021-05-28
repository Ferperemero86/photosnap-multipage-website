import React from "react";
import { useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
	query GetBooks {
		books {
			title
			author
		}
	}
`;

const Test = () => {
	const { loading, data } = useQuery(EXCHANGE_RATES);

	if (loading === false) {
		console.log("DATA", data.books);
	}

	return <h1>Test</h1>;
};

export default Test;
