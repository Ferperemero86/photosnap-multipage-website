import React from "react";

import { useStaticQuery, graphql } from "gatsby";

const MainMenu = () => {
	const query = useStaticQuery(graphql`
		query dataQuery {
			dataJson {
				test
			}
		}
	`);

	const { test } = query.dataJson;
	return <h1>{test}</h1>;
};

export default MainMenu;
