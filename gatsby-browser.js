import React from "react";

import ReduxWrapper from "./src/state/ReduxWrapper";

export const wrapRootElement = ({ element }) => (
	<ReduxWrapper element={element} />
);
