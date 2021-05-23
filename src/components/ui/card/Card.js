import React from "react";

import Img from "../image/Img";
import TextBlock from "../text-block/TextBlock";
import Button from "../button/Button";

const HeaderImage = ({ cardImages, stylesClass }) => {
	return cardImages.map((card) => {
		const { size, url } = card;

		const imgClass =
			size === "sm" ? "sm-img" : size === "md" ? "md-img" : "lg-img";

		return (
			<Img
				url={url}
				key={size}
				stylesClass={`card-header-img ${stylesClass}-img ${imgClass} img-fluid`}
			/>
		);
	});
};

const CardHeader = ({ stylesClass, cardImages }) => (
	<div className={`card-header ${stylesClass}-header img-responsive`}>
		<HeaderImage
			cardImages={cardImages}
			stylesClass={`${stylesClass}-header`}
		/>
	</div>
);

const CardBody = ({ stylesClass, hType, hText, pText, btnLabel, icon }) => {
	return (
		<div className={`card-body ${stylesClass}-body`}>
			<TextBlock hType={hType} hText={hText} pText={pText} />
			<Button
				stylesClass={`card-body-btn ${stylesClass}-body-btn`}
				label={btnLabel}
			/>
			<Img
				url={icon.url}
				stylesClass={`card-body-icon ${stylesClass}-body-icon`}
			/>
		</div>
	);
};

const Card = ({
	stylesClass,
	cardImages,
	hType,
	hText,
	pText,
	btnLabel,
	icon
}) => {
	return (
		<div className={`${stylesClass}`}>
			<CardHeader cardImages={cardImages} stylesClass={`${stylesClass}`} />
			<CardBody
				hType={hType}
				hText={hText}
				pText={pText}
				btnLabel={btnLabel}
				icon={icon}
				stylesClass={`${stylesClass}`}
			/>
		</div>
	);
};

export default Card;
