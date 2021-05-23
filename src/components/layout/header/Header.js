import React from "react";

import Card from "../../ui/card/Card";

const Header = ({ stylesClass, cardContent, hType }) => {
	const { cardHeading, cardText, cardImages } = cardContent;
	const { btnLabel } = cardContent.button;
	const { icon } = cardContent;
	console.log(cardContent, btnLabel);
	return (
		<div className={`${stylesClass}`}>
			<div className={`${stylesClass}-content`}>
				<Card
					hType={hType}
					hText={cardHeading}
					pText={cardText}
					cardImages={cardImages}
					btnLabel={btnLabel}
					icon={icon}
					stylesClass="card-primary"
				/>
			</div>
		</div>
	);
};

export default Header;
