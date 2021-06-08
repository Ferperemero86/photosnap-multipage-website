// import React from "react";
// import { useQuery, gql } from "@apollo/client";
//
// import Layout from "../components/layout/Layout";
// import Header from "../components/layout/header/Header";
// import SectionTwo from "../components/layout/sections/section-two/SectionTwo";
//
// import { getCardsFromQuery } from "../helpers";
//
// const query = gql(`
//	query getStoriesContent {
//		button(name: "story") {
//			name
//			label
//		}
//		icon(name:"arrowIconFirst") {
//			name
//			url
//		}
//		groupCards(category: "headerSecond group2") {
//			name
//			cards {
//				heading
//				text
//				backgroundImages {
//					size
//					url
//				}
//				images {
//					size
//					url
//				}
//			}
//		}
//	}
// `);
//
// const Stories = () => {
//	const { loading, data } = useQuery(query);
//
//	if (!loading) {
//		const { groupCards, button, icon } = data;
//
//		const headerSecondCard = getCardsFromQuery(groupCards, "headerSecond");
//		const group2Cards = getCardsFromQuery(groupCards, "group2");
//
//		return (
//			<Layout>
//				<Header
//					stylesClass="header-second"
//					cardContent={headerSecondCard}
//					button={button}
//					icon={icon}
//					cardClass="card-primary"
//					hType="h2"
//				/>
//				<main>
//					<SectionTwo cardsContent={group2Cards} button={button} icon={icon} />
//				</main>
//			</Layout>
//		);
//	}
//
//	return null;
// };
//
// export default Stories;
//
