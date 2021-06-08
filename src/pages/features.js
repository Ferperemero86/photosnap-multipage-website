import React from "react";
// import { useQuery, gql } from "@apollo/client";
//
// import Layout from "../components/layout/Layout";
// import Header from "../components/layout/header/Header";
// import SectionThree from "../components/layout/sections/section-three/SectionThree";
// import SectionFour from "../components/layout/sections/section-four/SectionFour";
//
// import { getCardsFromQuery, getElementFromQuery } from "../helpers";
//
// const query = gql(`
//	query getHomeContent {
//		button(name: "invite") {
//			name
//			label
//		}
//		icon(name:"arrowIconFirst") {
//			name
//			url
//		}
//		groupCards(category: "headerThird group3 group4") {
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
const Features = () => {
	//	const { loading, data } = useQuery(query);
	//
	//	if (!loading) {
	//		const { groupCards, button, icon } = data;
	//
	//		const headerThirdCard = getCardsFromQuery(groupCards, "headerThird");
	//		const group3Cards = getCardsFromQuery(groupCards, "group3");
	//		const group4Cards = getCardsFromQuery(groupCards, "group4");
	//
	//		return (
	//			<Layout>
	//				<Header
	//					stylesClass="header-primary"
	//					cardContent={headerThirdCard}
	//					cardClass="card-primary"
	//					hType="h2"
	//				/>
	//				<main>
	//					<SectionThree
	//						cardsContent={group3Cards}
	//						button={button}
	//						icon={icon}
	//					/>
	//					<SectionFour
	//						cardsContent={group4Cards}
	//						buttonLabel={button.label}
	//						iconUrl={icon.url}
	//					/>
	//				</main>
	//			</Layout>
	//		);
	//	}
	//
	return <h1>Features</h1>;
};
//
/// *
//
//* /
//
export default Features;
//
