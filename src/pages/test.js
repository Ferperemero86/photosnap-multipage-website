import React from "react";
import { gql } from "@apollo/client";

import { client } from "../API/client";

const Test = () => {
	client
		.query({
			query: gql`
				query GetBooks {
					books {
						title
						author
					}
				}
			`
		})
		.then((result) => console.log(result));
	return <h1>Test</h1>;
};

export default Test;
