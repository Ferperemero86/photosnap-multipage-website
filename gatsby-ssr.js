import React from "react";

import { ApolloProvider } from "@apollo/client/react";

import { client } from "./api/client";
import ReduxWrapper from "./src/state/ReduxWrapper";

export const wrapRootElement = ({ element }) => (
	<ApolloProvider client={client}>
		<ReduxWrapper element={element} />
	</ApolloProvider>
);
