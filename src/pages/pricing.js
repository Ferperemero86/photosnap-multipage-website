import React from "react";
import { useQuery, gql } from "@apollo/client";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/header/Header";
import SectionFive from "../components/layout/sections/section-five/SectionFive";

// import SectionTwo from "../components/layout/sections/section-two/SectionTwo";
// import SectionThree from "../components/layout/sections/section-three/SectionThree";

import { getCardsFromQuery, getElementFromQuery } from "../helpers";

const query = gql(`
	query getPricingContent {
		buttons {
			name
			label
		}
		icon(name:"arrowIconFirst") {
			name
			url
		}
		groupCards(category: "headerFour") {
			name
			cards {
				heading
				text
				backgroundImages {
					size
					url
				}
				images {
					size
					url
				}
			}
		}
		planPrices {
			name
			price
			heading
			bodyText
		}
	}
`);

const Home = () => {
	const { loading, data } = useQuery(query);

	if (!loading) {
		const { groupCards, buttons, icon, planPrices } = data;
		console.log("DATA", data);
		const headerFourCard = getCardsFromQuery(groupCards, "headerFour");
		// const group1Cards = getCardsFromQuery(groupCards, "group1");
		// const group2Cards = getCardsFromQuery(groupCards, "group2", 4);
		// const group3Cards = getCardsFromQuery(groupCards, "group3", 3);
		const planButton = getElementFromQuery(buttons, "plan");
		console.log(planButton);
		return (
			<Layout>
				<Header
					stylesClass="header-primary"
					cardContent={headerFourCard}
					cardClass="card-primary"
					hType="h2"
				/>
				<main>
					<SectionFive planPrices={planPrices} planButton={planButton} />
				</main>
			</Layout>
		);
	}

	return null;
};

export default Home;
