import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
import { useQuery, gql } from "@apollo/client";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/header/Header";
import SectionOne from "../components/layout/sections/section-one/SectionOne";
// import SectionTwo from "../components/layout/sections/section-two/SectionTwo";
// import SectionThree from "../components/layout/sections/section-three/SectionThree";

const getGroupCards = (groups, groupName) => {
	const group = groups.find((group) => group.name === groupName);

	if (group.cards.length === 1) {
		return group.cards[0];
	}

	return group.cards;
};

const query = gql(`
	query getHomeContent {
		button(name:"invite") {
			name
			label
		}
		icon(name:"arrowIconFirst") {
			name
			url
		}
		groupCards(category: "headerPrimary group1") {
			name
			cards {
				heading
				text
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
		console.log("data", data);
		const { groupCards, button, icon } = data;

		const headerPrimaryCard = getGroupCards(groupCards, "headerPrimary");
		const group1Cards = getGroupCards(groupCards, "group1");
		console.log(button);
		return (
			<Layout>
				<Header
					stylesClass="header-primary"
					cardContent={headerPrimaryCard}
					button={button}
					icon={icon}
					cardClass="card-primary"
					hType="h2"
				/>
				<SectionOne cardsContent={group1Cards} button={button} icon={icon} />
			</Layout>
		);
	}

	return null;

	/*
	<SectionTwo cardsContent={group2Content} />
	<SectionThree cardsContent={group3Content} cardsNumber="3" />
	 */
	// const cardContent = query.dataJson.cards.headerPrimary;
	// const group1Content = query.dataJson.cards.group1;
	// const group2Content = query.dataJson.cards.group2;
	// const group3Content = query.dataJson.cards.group3;
};

export default Home;
