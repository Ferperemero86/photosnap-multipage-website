import React from "react";

import Card from "../../../ui/card/Card";

const Cards = ({ cardsContent }) => {
	console.log(cardsContent);

	return cardsContent.map((content, idx) => {
		const { cardHeading, cardText, cardImages, button, icon } = content;

		return (
			<Card
				hType="h3"
				hText={cardHeading}
				pText={cardText}
				cardImages={cardImages}
				btnLabel={button.btnLabel}
				icon={icon.url}
				stylesClass="card-second"
				imgRight=""
				separatorDisplay={true}
				key={idx}
			/>
		);
	});
};

const SectionTwo = ({ cardsContent }) => (
	<div className="section-two">
		<Cards cardsContent={cardsContent} />
	</div>
);

export default SectionTwo;
