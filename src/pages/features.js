import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/header/Header";
import SectionThree from "../components/layout/sections/section-three/SectionThree";
import SectionFour from "../components/layout/sections/section-four/SectionFour";

import { getCardsFromQuery, getElementFromQuery } from "../helpers";

const Features = ({ data }) => {
	const { groupCards, buttons, icons } = data.apiJson;
	const headerThirdCard = getCardsFromQuery(groupCards, "headerThird");
	const group3Cards = getCardsFromQuery(groupCards, "group3");
	const group4Cards = getCardsFromQuery(groupCards, "group4");
	const buttonInvite = getElementFromQuery(buttons, "invite");
	const arrowIconFirst = getElementFromQuery(icons, "arrowIconFirst");

	return (
		<Layout>
			<Header
				stylesClass="header-primary"
				cardContent={headerThirdCard}
				cardClass="card-primary"
				hType="h2"
			/>
			<SectionThree cardsContent={group3Cards} />
			<SectionFour
				cardsContent={group4Cards}
				buttonLabel={buttonInvite.label}
				iconUrl={arrowIconFirst.url}
			/>
		</Layout>
	);
};

export const query = graphql`
	query getFeaturesContent {
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

export default Features;
