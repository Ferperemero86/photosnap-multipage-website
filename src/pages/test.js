import React, { useEffect } from "react";

import { fetchGreeting } from "../../client";

const Test = () => {
	useEffect(() => {
		fetchGreeting();
	}, []);
	return <h1>Test</h1>;
};

export default Test;
