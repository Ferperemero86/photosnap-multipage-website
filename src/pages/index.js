import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/Layout";

import { getCardsFromQuery, getElementFromQuery } from "../helpers";
import Header from "../components/layout/header/Header";
import SectionOne from "../components/layout/sections/section-one/SectionOne";
import SectionTwo from "../components/layout/sections/section-two/SectionTwo";
import SectionThree from "../components/layout/sections/section-three/SectionThree";

const Home = ({ data }) => {
	const { groupCards, icons, buttons } = data.apiJson;
	const headerPrimaryCard = getCardsFromQuery(groupCards, "headerPrimary");
	const group1Cards = getCardsFromQuery(groupCards, "group1");
	const group2Cards = getCardsFromQuery(groupCards, "group2");
	const group3Cards = getCardsFromQuery(groupCards, "group3", 3);
	const arrowIconFirst = getElementFromQuery(icons, "arrowIconFirst");
	const arrowIconSecond = getElementFromQuery(icons, "arrowIconSecond");
	const inviteButton = getElementFromQuery(buttons, "invite");
	const storyButton = getElementFromQuery(buttons, "story");

	return (
		<div>
			<Layout>
				<Header
					stylesClass="header-primary"
					cardContent={headerPrimaryCard}
					button={inviteButton}
					icon={arrowIconFirst}
					cardClass="card-primary"
					hType="h2"
				/>
				<SectionOne
					cardsContent={group1Cards}
					button={inviteButton}
					icon={arrowIconSecond}
				/>
				<SectionTwo
					cardsContent={group2Cards}
					button={storyButton}
					icon={arrowIconFirst}
				/>
				<SectionThree cardsContent={group3Cards} />
			</Layout>
		</div>
	);
};

export const query = graphql`
	query HomeQuery {
		apiJson {
			groupCards {
				name
				cards {
					backgroundImages {
						size
						url
					}
					category
					heading
					images {
						size
						url
					}
					text
				}
			}
			icons {
				name
				url
			}
			buttons {
				label
				name
			}
		}
	}
`;

/*
<Layout>
				
					
				
			</Layout>
 */

export default Home;
