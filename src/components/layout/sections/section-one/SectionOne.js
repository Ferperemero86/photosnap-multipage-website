import React from "react";

import Card from "../../../ui/card/Card";

const Cards = ({ cardsContent }) => {
	console.log(cardsContent);
	return cardsContent.map((content, idx) => {
		const { cardHeading, cardText, cardImages, button, icon } = content;
		return (
			<Card
				hType="h2"
				hText={cardHeading}
				pText={cardText}
				cardImages={cardImages}
				btnLabel={button.btnLabel}
				icon={icon.url}
				stylesClass="card-primary"
				key={idx}
			/>
		);
	});
};

const SectionOne = ({ cardsContent }) => (
	<div className="section-one">
		<Cards cardsContent={cardsContent} />
	</div>
);

export default SectionOne;
