import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/header/Header";
import SectionOne from "../components/layout/sections/section-one/SectionOne";

const Home = () => {
	const query = useStaticQuery(graphql`
		query cardsQuery {
			dataJson {
				cards {
					headerPrimary {
						cardHeading
						cardText
						cardImages {
							size
							url
						}
						button {
							btnLabel
						}
						icon {
							url
						}
					}
					group1 {
						button {
							btnLabel
						}
						cardHeading
						cardImages {
							size
							url
						}
						cardText
						icon {
							url
						}
					}
				}
			}
		}
	`);

	console.log(query);

	const cardContent = query.dataJson.cards.headerPrimary;
	const cardsContent = query.dataJson.cards.group1;

	console.log(cardsContent);
	return (
		<Layout>
			<Header
				stylesClass="header-primary"
				cardContent={cardContent}
				hType="h2"
			/>
			<SectionOne cardsContent={cardsContent} />
		</Layout>
	);
};

export default Home;
