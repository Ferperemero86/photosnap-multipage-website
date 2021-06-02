import React from "react";
import { useQuery, gql } from "@apollo/client";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/header/Header";
// import SectionTwo from "../components/layout/sections/section-two/SectionTwo";

import { getCardsFromQuery, getElementFromQuery } from "../helpers";

const query = gql(`
	query getStoriesContent {
		button(name: "story") {
			name
			label
		}
		icon(name:"arrowIconFirst") {
			name
			url
		}
		groupCards(category: "headerSecond group4") {
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

const Stories = () => {
	const { loading, data } = useQuery(query);

	if (!loading) {
		const { groupCards, button, icon } = data;
		console.log(data);
		const headerSecondCard = getCardsFromQuery(groupCards, "headerSecond");

		return (
			<Layout>
				<Header
					stylesClass="header-second"
					cardContent={headerSecondCard}
					button={button}
					icon={icon}
					cardClass="card-primary"
					hType="h2"
				/>
			</Layout>
		);
	}

	return null;
	// const query = useStaticQuery(graphql``);
	// const cardContent = query.dataJson.cards.headerSecond;
	// const group4Content = query.dataJson.cards.group4;
	// return (
	// <Layout>

	// <main>
	// <SectionTwo cardsContent={group4Content} />
	// </main>
	// </Layout>
	// );
};

export default Stories;
