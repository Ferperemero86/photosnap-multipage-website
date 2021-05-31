import React from "react";

import Card from "../../../ui/card/Card";

const Cards = ({ cardsContent, button, icon }) => {
	let imgRight = "img-right";

	return cardsContent.cards.map((content, idx) => {
		const { heading, text, images } = content;

		imgRight = imgRight === "img-right" ? "" : "img-right";

		return (
			<Card
				hType="h2"
				hText={heading}
				pText={text}
				cardImages={images}
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
