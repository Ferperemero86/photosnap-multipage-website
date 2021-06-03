import React from "react";
import { useQuery, gql } from "@apollo/client";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/header/Header";
import SectionOne from "../components/layout/sections/section-one/SectionOne";
import SectionTwo from "../components/layout/sections/section-two/SectionTwo";
import SectionThree from "../components/layout/sections/section-three/SectionThree";

import { getCardsFromQuery, getElementFromQuery } from "../helpers";

const query = gql(`
	query getHomeContent {
		buttons {
			name
			label
		}
		icon(name:"arrowIconFirst") {
			name
			url
		}
		groupCards(category: "headerPrimary group1 group2 group3") {
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
	}
`);

const Home = () => {
	const { loading, data } = useQuery(query);

	if (!loading) {
		const { groupCards, buttons, icon } = data;

		const headerPrimaryCard = getCardsFromQuery(groupCards, "headerPrimary");
		const headerButton = getElementFromQuery(buttons, "invite");
		const group1Cards = getCardsFromQuery(groupCards, "group1");
		const group2Cards = getCardsFromQuery(groupCards, "group2", 4);
		const group3Cards = getCardsFromQuery(groupCards, "group3", 3);
		const cardButton = getElementFromQuery(buttons, "story");

		return (
			<Layout>
				<Header
					stylesClass="header-primary"
					cardContent={headerPrimaryCard}
					button={headerButton}
					icon={icon}
					cardClass="card-primary"
					hType="h2"
				/>
				<main>
					<SectionOne
						cardsContent={group1Cards}
						button={cardButton}
						icon={icon}
					/>
					<SectionTwo
						cardsContent={group2Cards}
						button={cardButton}
						icon={icon}
					/>
					<SectionThree
						cardsContent={group3Cards}
						button={cardButton}
						icon={icon}
					/>
				</main>
			</Layout>
		);
	}

	return null;
};

export default Home;
