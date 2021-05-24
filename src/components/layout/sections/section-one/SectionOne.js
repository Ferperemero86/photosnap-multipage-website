import React from "react";

import Card from "../../../ui/card/Card";

const Cards = ({ cardsContent }) => {
	const { button, icon } = cardsContent;
	let imgRight = "img-right";

	return cardsContent.cards.map((content, idx) => {
		const { cardHeading, cardText, cardImages } = content;

		imgRight = imgRight === "img-right" ? "" : "img-right";

		return (
			<Card
				hType="h2"
				hText={cardHeading}
				pText={cardText}
				cardImages={cardImages}
				btnLabel={button.btnLabel}
				icon={icon.url}
				stylesClass="card-primary"
				imgRight={imgRight}
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
