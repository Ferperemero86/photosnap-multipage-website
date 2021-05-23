import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/header/Header";

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
				}
			}
		}
	`);

	console.log(query);

	const cardContent = query.dataJson.cards.headerPrimary;

	return (
		<Layout>
			<Header
				stylesClass="header-primary"
				cardContent={cardContent}
				hType="h2"
			/>
		</Layout>
	);
};

export default Home;
