import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
import { useQuery, gql } from "@apollo/client";

import Layout from "../components/layout/Layout";
// import Header from "../components/layout/header/Header";
// import SectionOne from "../components/layout/sections/section-one/SectionOne";
// import SectionTwo from "../components/layout/sections/section-two/SectionTwo";
// import SectionThree from "../components/layout/sections/section-three/SectionThree";

const query = gql(`
	query getHomeContent {
		logos {
			name
			url
		}
	}
`);

const Home = () => {
	const { loading, data } = useQuery(query);

	if (!loading) {
		// const mainLogo = data.logos.find((obj) => obj.name === "mainLogo");

		return (
			// <h1>Test</h1>
			<Layout></Layout>
			// <Header
			// stylesClass="header-primary"
			// cardContent={cardContent}
			// cardClass="card-primary"
			// hType="h2"
			/// >
			// <main>
			// <SectionOne cardsContent={group1Content} />
			// <SectionTwo cardsContent={group2Content} />
			// <SectionThree cardsContent={group3Content} cardsNumber="3" />
			// </main>
		);
	}

	return null;

	// const cardContent = query.dataJson.cards.headerPrimary;
	// const group1Content = query.dataJson.cards.group1;
	// const group2Content = query.dataJson.cards.group2;
	// const group3Content = query.dataJson.cards.group3;
};

export default Home;
