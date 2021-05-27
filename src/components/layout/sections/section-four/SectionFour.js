import React from "react";

import Heading from "../../../ui/heading/Heading";
import Button from "../../../ui/button/Button";
import Img from "../../../ui/image/Img";

const BackgoundImage = ({ images }) => {
	return images.map((img, idx) => {
		return (
			<Img url={img.url} key={idx} stylesClass={`${img.size}-img img-fluid`} />
		);
	});
};

const SectionFour = ({ cardsContent }) => {
	const cardHeading = cardsContent.cards[0].cardHeading;
	const cardButton = cardsContent.cards[0].cardButton.invite.btnLabel;
	const images = cardsContent.cards[0].cardImages;
	const icon = cardsContent.cards[0].icon;

	return (
		<div className="section-four">
			<div className="section-four-background img-responsive">
				<BackgoundImage images={images} />
			</div>
			<div className="section-four-content container">
				<Heading
					stylesClass="section-four-content-heading"
					type="h2"
					text={cardHeading}
				/>
				<div>
					<Button stylesClass="section-four-content-btn" label={cardButton} />
					<Img url={icon.url} stylesClass="section-four-content-icon" />
				</div>
			</div>
		</div>
	);
};

export default SectionFour;
