import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/header/Header";
import SectionOne from "../components/layout/sections/section-one/SectionOne";
import SectionTwo from "../components/layout/sections/section-two/SectionTwo";

const Home = () => {
	const query = useStaticQuery(graphql`
		query cardsQuery {
			dataJson {
				cards {
					headerPrimary {
						cardHeading
						cardImages {
							size
							url
						}
						cardText
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
						icon {
							url
						}
						cards {
							cardHeading
							cardImages {
								size
								url
							}
							cardText
						}
					}
					group2 {
						button {
							btnLabel
						}
						icon {
							url
						}
						cards {
							cardHeading
							cardImages {
								size
								url
							}
							cardText
						}
					}
				}
			}
		}
	`);

	console.log(query);

	const cardContent = query.dataJson.cards.headerPrimary;
	const group1Content = query.dataJson.cards.group1;
	const group2Content = query.dataJson.cards.group2;

	console.log(group2Content);
	return (
		<Layout>
			<Header
				stylesClass="header-primary"
				cardContent={cardContent}
				hType="h2"
			/>
			<main>
				<SectionOne cardsContent={group1Content} />
				<SectionTwo cardsContent={group2Content} />
			</main>
		</Layout>
	);
};

export default Home;
