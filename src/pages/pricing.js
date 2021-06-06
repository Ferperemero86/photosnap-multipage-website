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
		const { groupCards, buttons, planPrices } = data;
		const headerFourCard = getCardsFromQuery(groupCards, "headerFour");
		const planButton = getElementFromQuery(buttons, "plan");

		return (
			<Layout>
				<Header
					stylesClass="header-primary"
					cardContent={headerFourCard}
					cardClass="card-primary"
					hType="h2"
				/>
				<main>
					<SectionFive plans={planPrices} planButton={planButton} />
				</main>
			</Layout>
		);
	}

	return null;
};

export default Home;
