import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/header/Header";
import SectionThree from "../components/layout/sections/section-three/SectionThree";
import SectionFour from "../components/layout/sections/section-four/SectionFour";

const Features = () => {
	// const query = useStaticQuery(graphql``);

	// const cardContent = query.dataJson.cards.headerThird;
	// const group3Content = query.dataJson.cards.group3;
	// const group5Content = query.dataJson.cards.group5;

	return (
		<h1>Features</h1>
		// <Layout>
		// <Header
		/// stylesClass="header-primary"
		// cardContent={cardContent}
		// cardClass="card-primary"
		// hType="h2"
		/// >
		// <main>
		// <SectionThree cardsContent={group3Content} />
		// <SectionFour cardsContent={group5Content} />
		// </main>
		// </Layout>
	);
};

export default Features;
