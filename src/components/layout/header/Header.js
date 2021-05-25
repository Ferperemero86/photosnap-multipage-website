import React from "react";

import Card from "../../ui/card/Card";
import Img from "../../ui/image/Img";

const HeaderBackground = ({ backgroundImages }) => {
	if (!backgroundImages) {
		return null;
	}

	return backgroundImages.map((img, idx) => {
		return (
			<Img url={img.url} key={idx} stylesClass={`${img.size}-img img-fluid`} />
		);
	});
};

const Header = ({ stylesClass, cardContent, hType, cardClass }) => {
	const { cardHeading, cardText, cardImages, icon, backgroundImages } =
		cardContent;
	const { btnLabel } = cardContent.button;

	return (
		<div className={`${stylesClass}`}>
			<div className={`${stylesClass}-background img-responsive`}>
				<HeaderBackground backgroundImages={backgroundImages} />
			</div>
			<div className={`${stylesClass}-content`}>
				<Card
					hType={hType}
					hText={cardHeading}
					pText={cardText}
					cardImages={cardImages}
					btnLabel={btnLabel}
					icon={icon.url}
					stylesClass={cardClass}
					imgRight="img-right"
				/>
			</div>
		</div>
	);
};

export default Header;
