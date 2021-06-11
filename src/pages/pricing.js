import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/header/Header";
import SectionFive from "../components/layout/sections/section-five/SectionFive";

import { getCardsFromQuery, getElementFromQuery } from "../helpers";

const Pricing = ({ data }) => {
	const { groupCards, buttons, planPrices } = data.apiJson;
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
			<SectionFive plans={planPrices} planButton={planButton} />
		</Layout>
	);
};

export const query = graphql`
	query getPricingContent {
		apiJson {
			buttons {
				name
				label
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
			planPrices {
				name
				price {
					monthly
					yearly
				}
				heading
				bodyText
			}
		}
	}
`;

export default Pricing;
