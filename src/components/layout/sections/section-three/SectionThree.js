import React from "react";

import Card from "../../../ui/card/Card";

const Cards = ({ cardsContent, cardsNumber }) => {
	return cardsContent.cards.map((content, idx) => {
		const { cardHeading, cardText, cardImages } = content;

		if (cardsNumber && idx + 1 > cardsNumber) {
			return null;
		}

		return (
			<Card
				hType="h3"
				hText={cardHeading}
				pText={cardText}
				cardImages={cardImages}
				btnDisplay={false}
				stylesClass="card-three"
				imgRight=""
				separatorDisplay={false}
				key={idx}
			/>
		);
	});
};

const SectionThree = ({ cardsContent, cardsNumber }) => (
	<div className="section-three">
		<Cards cardsContent={cardsContent} cardsNumber={cardsNumber} />
	</div>
);

export default SectionThree;
