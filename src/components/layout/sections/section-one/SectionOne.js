import React from "react";

import Card from "../../../ui/card/Card";

const Cards = ({ cardsContent, button, icon }) => {
	console.log(button);
	let imgRight = "img-right";

	return cardsContent.map((content, idx) => {
		const { heading, text, images } = content;

		imgRight = imgRight === "img-right" ? "" : "img-right";

		return (
			<Card
				hType="h2"
				hText={heading}
				pText={text}
				cardImages={images}
				btnLabel={button.label}
				icon={icon.url}
				stylesClass="card-primary"
				imgRight={imgRight}
				key={idx}
			/>
		);
	});
};

const SectionOne = ({ cardsContent, button, icon }) => (
	<div className="section-one">
		<Cards cardsContent={cardsContent} button={button} icon={icon} />
	</div>
);

export default SectionOne;
