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

const SectionFour = ({ cardsContent, buttonLabel, iconUrl }) => {
	const { images, heading } = cardsContent;

	return (
		<div className="section-four">
			<div className="section-four-background img-responsive">
				<BackgoundImage images={images} />
			</div>
			<div className="section-four-content container">
				<Heading
					stylesClass="section-four-content-heading"
					type="h2"
					text={heading}
				/>
				<div>
					<Button stylesClass="section-four-content-btn" label={buttonLabel} />
					<Img url={iconUrl} stylesClass="section-four-content-icon" />
				</div>
			</div>
		</div>
	);
};

export default SectionFour;
