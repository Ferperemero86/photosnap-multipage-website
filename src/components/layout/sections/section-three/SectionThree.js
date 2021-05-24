import React from "react";

import Card from "../../../ui/card/Card";

const Cards = ({ cardsContent }) => {
	console.log(cardsContent);

	return cardsContent.cards.map((content, idx) => {
		const { cardHeading, cardText, cardImages } = content;
		console.log(cardImages);
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

const SectionThree = ({ cardsContent }) => (
	<div className="section-three">
		<Cards cardsContent={cardsContent} />
	</div>
);

export default SectionThree;
