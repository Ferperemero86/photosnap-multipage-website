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
				btnLabel={button.label}
				icon={icon.url}
				stylesClass="card-second"
				imgRight=""
				separatorDisplay={true}
				key={idx}
			/>
		);
	});
};

const SectionTwo = ({ cardsContent, button, icon }) => (
	<div className="section-two">
		<Cards cardsContent={cardsContent} button={button} icon={icon} />
	</div>
);

export default SectionTwo;
