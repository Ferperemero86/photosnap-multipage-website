import React from "react";

import Card from "../../../ui/card/Card";

const Cards = ({ cardsContent, button, icon }) => {
	return cardsContent.map((content, idx) => {
		const { heading, text, images } = content;

		return (
			<Card
				hType="h3"
				hText={heading}
				pText={text}
				cardImages={images}
				btnDisplay={false}
				stylesClass="card-three"
				imgRight=""
				separatorDisplay={false}
				key={idx}
			/>
		);
	});
};

const SectionThree = ({ cardsContent, button, icon }) => (
	<div className="section-three">
		<Cards cardsContent={cardsContent} />
	</div>
);

export default SectionThree;
