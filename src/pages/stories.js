import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/header/Header";
import SectionTwo from "../components/layout/sections/section-two/SectionTwo";

import { getCardsFromQuery, getElementFromQuery } from "../helpers";

const Stories = ({ data }) => {
	const { groupCards, buttons, icons } = data.apiJson;
	const headerSecondCard = getCardsFromQuery(groupCards, "headerSecond");
	const group2Cards = getCardsFromQuery(groupCards, "group2");
	const storyButton = getElementFromQuery(buttons, "story");
	const arrowIconFirst = getElementFromQuery(icons, "arrowIconFirst");

	return (
		<Layout>
			<Header
				stylesClass="header-second"
				cardContent={headerSecondCard}
				button={storyButton}
				icon={arrowIconFirst}
				cardClass="card-primary"
				hType="h2"
			/>
			<main>
				<SectionTwo
					cardsContent={group2Cards}
					button={storyButton}
					icon={arrowIconFirst}
				/>
			</main>
		</Layout>
	);
};

export const query = graphql`
	query getStoriesContent {
		apiJson {
			buttons {
				name
				label
			}
			icons {
				name
				url
			}
			groupCards {
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
	}
`;

export default Stories;
