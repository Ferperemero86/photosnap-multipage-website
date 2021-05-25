import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/header/Header";
import SectionTwo from "../components/layout/sections/section-two/SectionTwo";

const Stories = () => {
	const query = useStaticQuery(graphql`
		query storiesQuery {
			dataJson {
				cards {
					headerSecond {
						backgroundImages {
							size
							url
						}
						button {
							btnLabel
						}
						cardHeading
						cardText
						icon {
							url
						}
					}
					group4 {
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

	const cardContent = query.dataJson.cards.headerSecond;
	const group4Content = query.dataJson.cards.group4;

	return (
		<Layout>
			<Header
				stylesClass="header-second"
				cardContent={cardContent}
				cardClass="card-primary"
				hType="h2"
			/>
			<main>
				<SectionTwo cardsContent={group4Content} />
			</main>
		</Layout>
	);
};

export default Stories;
