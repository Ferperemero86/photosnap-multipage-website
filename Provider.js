import React from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";

function reducer (state = { test: "test" }) {
	return state;
}

const store = createStore(reducer, { test: "test" });

export default ({ element }) => {
	<Provider
		store={store}>
		{element}
	</Provider>;
};
