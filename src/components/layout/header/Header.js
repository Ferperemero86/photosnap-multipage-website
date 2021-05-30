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

const Header = ({
	stylesClass,
	cardContent,
	button,
	icon,
	hType,
	cardClass
}) => {
	const { heading, text, images } = cardContent;

	return (
		<div className={`${stylesClass}`}>
			<div className={`${stylesClass}-background img-responsive`}>
				<HeaderBackground backgroundImages="" />
			</div>
			<div className={`${stylesClass}-content`}>
				<Card
					hType={hType}
					hText={heading}
					pText={text}
					cardImages={images}
					btnLabel={button.label}
					icon={icon.url}
					stylesClass={cardClass}
					imgRight="img-right"
				/>
			</div>
		</div>
	);
};

export default Header;
